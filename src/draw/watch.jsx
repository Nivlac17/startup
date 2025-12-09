// Non-Artist can watch the other artist draw and send messages from this page -> accessable by selecting the 
// "Art Title" button. User cannot draw. create artist check


import React, { useEffect, useRef, useState } from "react";
import { GameEvent, GameNotifier } from './websocket.js';
import { useLocation } from "react-router-dom";


import "./draw.css";

const COLOR_PALETTE = [
  "yellow",     // 0
  "blue",       // 1
  "red",        // 2
  "green",      // 3
  "pink",       // 4
  "purple",     // 5
  "grey",       // 6
  "orange",     // 7
  "black",      // 8
  "whitesmoke", // 9
];

const DEFAULT_COLOR = "whitesmoke";


export function Watch() {
  const gridRef = useRef(null);
  const location = useLocation();

  const { title, artCsv } = location.state || {};

  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');



  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    if (!artCsv) {
      console.warn(
        "No artCsv in navigation state, artCsv not passed from Navigation?"
      );
      grid.innerHTML = "";
      return;
    }

    // grid.innerHTML = ""; // clear existing

    const values = artCsv.split(",");
    const frag = document.createDocumentFragment();

    for (let i = 0; i < values.length; i++) {
      const idx = parseInt(values[i], 10);
      const color = COLOR_PALETTE[idx] ?? DEFAULT_COLOR;

      const d = document.createElement("div");
      d.className = "c";
      d.style.backgroundColor = color;
      frag.appendChild(d);
    }

    grid.appendChild(frag);
  }, [artCsv]);


  

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
      <section className="art-selection">
            <h1>{title || "Art Viewer"}</h1>
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
