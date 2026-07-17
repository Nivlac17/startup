import React, { useEffect, useRef, useState } from "react";
import "./draw.css";

export function Draw() {
  const gridRef = useRef(null);
  const chatRef = useRef(null);
  const isDrawing = useRef(false);

  const CELLS = 4560;

  const [selectedColor, setSelectedColor] = useState("black");
  const [messages, setMessages] = useState([
    { name: "System", message: "Welcome to Lines of Light!" },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const colors = [
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
  ];

  // Create the drawing grid once
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < CELLS; i++) {
      const cell = document.createElement("div");
      cell.className = "c";
      fragment.appendChild(cell);
    }

    grid.appendChild(fragment);
  }, []);

  // Drawing functionality
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const paint = (event) => {
      if (event.target.classList.contains("c")) {
        event.target.style.backgroundColor = selectedColor;
      }
    };

    const handleMouseDown = (event) => {
      isDrawing.current = true;
      paint(event);
    };

    const handleMouseMove = (event) => {
      if (isDrawing.current) {
        paint(event);
      }
    };

    const handleMouseUp = () => {
      isDrawing.current = false;
    };

    grid.addEventListener("mousedown", handleMouseDown);
    grid.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      grid.removeEventListener("mousedown", handleMouseDown);
      grid.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [selectedColor]);

  // Auto-scroll chat to newest message
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = () => {
    const text = inputMessage.trim();

    if (!text) return;

    setMessages((prev) => [
      ...prev,
      {
        name: "Me",
        message: text,
      },
    ]);

    setInputMessage("");
  };


  // Temporary fake WebSocket messages--------------------------------------------------------
useEffect(() => {
  const interval = setInterval(() => {
    const userName = `User-${Math.floor(Math.random() * 1000)}`;

    setMessages((prev) => [
      ...prev,
      {
        name: userName,
        message: "Hello",
      },
    ]);
  }, 1000);

  return () => clearInterval(interval);
}, []);
// ---------------------------------------------------------------------------------------
  return (
    <main className="container-fluid layout">
      {/* Color Palette */}
      <aside className="color-palet">
        <div className="gridcolor">
          {colors.map((color) => (
            <button
              key={color}
              className={selectedColor === color ? "selected-color" : ""}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
              title={color}
            />
          ))}
        </div>

        <div className="current-color">
          <p>Current Color</p>
          <div
            className="color-preview"
            style={{ backgroundColor: selectedColor }}
          />
        </div>
      </aside>

      {/* Canvas */}
      <section className="art-selection">
        <div className="g" ref={gridRef}></div>
      </section>

      {/* Chat */}
      <aside className="chat-box">
        <div className="chats" ref={chatRef}>
          {messages.map((message, index) => (
            <div className="chat-message" key={index}>
              <strong>{message.name}: </strong>
              {message.message}
            </div>
          ))}
        </div>

        <div className="sender">
          <input
            type="text"
            placeholder="Message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
            
          />

          <button onClick={sendMessage}>Send</button>
        </div>
      </aside>
    </main>
  );
}