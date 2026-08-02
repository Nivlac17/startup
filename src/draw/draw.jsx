import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useArtworkChat } from "./useArtworkChat";

import "./draw.css";

export function Draw() {
  const gridRef = useRef(null);
  const chatRef = useRef(null);
  const isDrawing = useRef(false);
  const location = useLocation();

  const artTitle = location.state?.artTitle || "Untitled";
  const userName = localStorage.getItem("userName") || "Unknown";
  const CELLS = 4560;
  const [artId, setArtId] = useState( location.state?._id || null);
  const {messages, sendMessage: sendChatMessage, connectionStatus,} = useArtworkChat({artId,userName,});

  const [selectedColor, setSelectedColor] = useState("black");
  const [inputMessage, setInputMessage] = useState("");

  const colors = [  // Neutrals
  "black",
  "whitesmoke",
  "silver",
  "grey",
  "brown",
  // Reds / Pinks
  "red",
  "crimson",
  "tomato",
  "coral",
  "salmon",
  "pink",
  "hotpink",
  "magenta",

  // Oranges / Yellows
  "orange",
  "gold",
  "yellow",
  "khaki",

  // Greens
  "lime",
  "green",
  "olive",
  "teal",
  "aquamarine",
  "turquoise",

  // Blues
  "cyan",
  "skyblue",
  "blue",
  "deepskyblue",

  "navy",
  "indigo",

  // Purples
  "purple",
  "orchid",
  "violet",
  "plum"

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
    const wasSent = sendChatMessage(inputMessage);
    if (wasSent) {
      setInputMessage('');
    }
  };


    const saveArt = async () => {
        const cells = gridRef.current.querySelectorAll(".c");

        const colors = Array.from(cells).map(
          (cell) => cell.style.backgroundColor || "white"
        );

        const columns = 80;
        const rows = [];

        for (let i = 0; i < colors.length; i += columns) {
          rows.push(colors.slice(i, i + columns).join(","));
        }

        const artCsv = rows.join("\n");

        try {
          let title = artTitle;

          // Ask for a name if the artwork is currently untitled
          if (title === "Untitled") {
            const newTitle = window.prompt("What would you like to name your artwork?");

            // User clicked Cancel
            if (newTitle === null) {
              return;
            }

            // Don't allow an empty name
            if (newTitle.trim() === "") {
              alert("Please enter a name for your artwork.");
              return;
            }

            title = newTitle.trim();
          }

          const response = await fetch("/api/art", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userName,
              title: title,
              artCsv: artCsv,
            }),
          });

          if (!response.ok) {
            throw new Error("Failed to save artwork");
          }

          const savedResult = await response.json();
          setArtId(savedResult.artwork._id);

          alert("Artwork saved!");
        } catch (error) {
          console.error("Error saving artwork:", error);
          alert("Could not save artwork.");
        }
      };



  // Temporary fake WebSocket messages--------------------------------------------------------
// useEffect(() => {
//   const interval = setInterval(() => {
//     const userNameWS = `User-${Math.floor(Math.random() * 1000)}`;

//     setMessages((prev) => [
//       ...prev,
//       {
//         name: userNameWS,
//         message: "Hello",
//       },
//     ]);
//   }, 1000);

//   return () => clearInterval(interval);
// }, []);
// ---------------------------------------------------------------------------------------
  return (
    <main className="container-fluid layout">
      {/* Color Palette */}
      <aside className="color-palet">
         <button onClick={saveArt}>Save Art</button>

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

        {/* <div className="current-color">
          <p>Current Color</p>
          <div
            className="color-preview"
            style={{ backgroundColor: selectedColor }}
          />
        </div> */}

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
            placeholder={
              !artId
                ? 'Save the artwork to start chatting'
                : connectionStatus === 'connected'
                  ? 'Message...'
                  : connectionStatus === 'connecting'
                    ? 'Connecting...'
                    : connectionStatus === 'error'
                      ? 'Chat connection failed'
                      : 'Chat disconnected'
            }
            disabled={!artId || connectionStatus !== 'connected'}
            value={inputMessage}
            onChange={(event) => setInputMessage(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                sendMessage();
              }
            }}
          />

         <button type="button" onClick={sendMessage} disabled={!artId || connectionStatus !== "connected"}>
            Send
          </button>
        </div>
        

      </aside>
      
    </main>
  );

}