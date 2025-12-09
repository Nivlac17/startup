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


const COLOR_TO_INDEX = COLOR_PALETTE.reduce((acc, color, idx) => {
  acc[color] = idx;
  return acc;
}, {});

const DEFAULT_COLOR = "whitesmoke";
const DEFAULT_COLOR_INDEX = COLOR_TO_INDEX[DEFAULT_COLOR];


export function Draw() {
  const gridRef = useRef(null);
  const CELLS = 4560;


  const location = useLocation();
  const initialTitleFromNav = location.state?.artTitle || "";

  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const [selectedColor, setSelectedColor] = useState("black");
  const [artTitle, setArtTitle] = useState(initialTitleFromNav); 
  const isDrawing = useRef(false);



  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const frag = document.createDocumentFragment();
    for (let i = 0; i < CELLS; i++) {
      const d = document.createElement("div");
      d.className = "c";
      d.style.backgroundColor = DEFAULT_COLOR;
      d.dataset.colorIndex = String(DEFAULT_COLOR_INDEX);
      frag.appendChild(d);
    }
    grid.appendChild(frag);
  }, []);


// painting logic
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

  const paint = (e) => {
    const target = e.target;
    if (target.classList && target.classList.contains("c")) {
      target.style.backgroundColor = selectedColor;
      const idx = COLOR_TO_INDEX[selectedColor];
      if (idx !== undefined) {
        target.dataset.colorIndex = String(idx);
      }
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

    const handleMouseLeave = () => {
      isDrawing.current = false;
    };

    grid.addEventListener("mousedown", handleMouseDown);
    grid.addEventListener("mouseup", handleMouseUp);
    grid.addEventListener("mousemove", handleMouseMove);


    // cleanup of listeners
    return () => {
      grid.removeEventListener("mousedown", handleMouseDown);
      grid.removeEventListener("mouseup", handleMouseUp);
      grid.removeEventListener("mouseleave", handleMouseLeave);
      grid.removeEventListener("mousemove", handleMouseMove);
    };
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


    // ---- EXPORT GRID TO CSV ----
const saveArtToDatabase = async () => {
  if (!artTitle.trim()) {
    alert("Please enter an art title."); //Tis for when someone clicks the "draw" button at the top.
    return;
  }

  const grid = gridRef.current;
  if (!grid) return;

  const cells = Array.from(grid.children);
  const values = cells.map((cell) =>
    cell.dataset.colorIndex !== undefined ? cell.dataset.colorIndex : "9"
  );
  const csv = values.join(",");

    try {
      const response = await fetch("/api/portfolio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: artTitle.trim(),
          artCsv: csv,
        }),
      });

      if (!response.ok) {
        const text = await response.text();
        console.error("Save failed:", text);
        alert("Failed to save art.");
        return;
      }

      alert("Art saved!");
    } catch (err) {
      console.error("Error saving art:", err);
      alert("Error saving art.");
    }
  };

    // ---------------------------


  return (
    <main className="container-fluid layout">
      <aside className="color-palet">
        <div className="gridcolor">
          {COLOR_PALETTE.map((color, idx) => (
            <button
              key={idx}
              style={{ background: color }}
              onClick={() => setSelectedColor(color)}
            ></button>
          ))}
          <div className="selectedColor">
            <button style={{ background: selectedColor }}></button>
            <button onClick={saveArtToDatabase} className="export-btn">Save Art</button>
          </div>
        </div>
      </aside>



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
