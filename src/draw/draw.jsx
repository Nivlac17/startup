import React, { useEffect, useRef, useState } from "react";
import { GameEvent, GameNotifier } from './websocket.js';

import "./draw.css";


export function Draw() {
  const gridRef = useRef(null);
  const CELLS = 4560;

  const [messages, setMessages] = useState(['']);
  const [inputMessage, setInputMessage] = useState('');


  const [selectedColor, setSelectedColor] = useState("black");
  const isDrawing = useRef(false);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < CELLS; i++) {
      const d = document.createElement("div");
      d.className = "c";
      frag.appendChild(d);
    }
    grid.appendChild(frag);
  }, []);



  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const paint = (e) => {
      if (e.target.classList.contains("c")) {
        e.target.style.backgroundColor = selectedColor;
      }
    };

    const handleMouseDown = (e) => {
      isDrawing.current = true;
      paint(e);
    };

    const handleMouseUp = () => {
      isDrawing.current = false;
    };

    const handleMouseMove = (e) => {
      if (isDrawing.current) paint(e);
    };

    grid.addEventListener("mousedown", handleMouseDown);
    grid.addEventListener("mouseup", handleMouseUp);
    grid.addEventListener("mousemove", handleMouseMove);
  }, [selectedColor]);

  useEffect(() => {
    const handler = (event) => {
      if (event.type === GameEvent.Message) {
        setMessages((prev) => [...prev, event.value]);
      // } else if (event.type === GameEvent.System) {
      //   console.log("System event:", event.value);
      }
    };
  

    GameNotifier.addHandler(handler);
    return () => GameNotifier.removeHandler(handler);
  }, []);


  const sendMessage = () => {
    if (!inputMessage.trim()) return;
      const newMessage = { name: 'Me', message: inputMessage };
      setMessages((prev) => [...prev, newMessage]);
      setInputMessage('');
  };

  // Scroll to most recent chat
  const chatRef = useRef(null);
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);


  return (
    <main className="container-fluid layout">
      <aside className="color-palet">
        <div className="gridcolor">
          {[
            "yellow",
            "blue",
            "red",
            "green",
            "pink",
            "purple",
            "grey",
            "orange",
            "black",
            "whitesmoke",
          ].map((color) => (
            <button
              key={color}
              style={{ background: color }}
              onClick={() => setSelectedColor(color)}
            ></button>
          ))}
        </div>
      </aside>

      <button style={{ background: selectedColor }}></button>

      <section className="art-selection">
        <div className="g" id="g" ref={gridRef}></div>
      </section>

      <div className="chat-box">
        <div className="chats" ref={chatRef}>
          {messages.map((m, i) => (
            <div key={i}>
              <p>{m.name}: {m.message}</p>
            </div>
          ))}
        </div>
        <div className="sender">
          <button onClick={sendMessage}>Send</button>
          <label htmlFor="count"></label>
          <input type="text" placeholder="Message" value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
        </div>
      </div>
    </main>
  );
}
