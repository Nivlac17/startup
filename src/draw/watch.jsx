import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./draw.css";

export function Watch() {
  const location = useLocation();
  const navigate = useNavigate();

  const gridRef = useRef(null);
  const chatRef = useRef(null);

  const CELLS = 4560;

  const [messages, setMessages] = useState([
    {
      name: "System",
      message: "Welcome to Lines of Light!",
    },
  ]);

  const [inputMessage, setInputMessage] = useState("");

  const artwork = location.state || {};
  const { userName, title, artCsv } = artwork;

  // Convert the saved CSV string into an array of cell colors.
  const parseArtCsv = (csv) => {
    if (!csv || typeof csv !== "string") {
      return [];
    }

    return csv
      .split(/[\n,]/)
      .map((color) => color.trim())
      .filter((color) => color.length > 0);
  };

  // Build the grid and apply the saved artwork.
  useEffect(() => {
    const grid = gridRef.current;

    if (!grid) {
      return;
    }

    // Prevent duplicate cells during React development mode.
    grid.replaceChildren();

    const savedColors = parseArtCsv(artCsv);
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < CELLS; i++) {
      const cell = document.createElement("div");

      cell.className = "c";

      const savedColor = savedColors[i];

      if (savedColor) {
        cell.style.backgroundColor = savedColor;
      }

      fragment.appendChild(cell);
    }

    grid.appendChild(fragment);
  }, [artCsv]);

  // Auto-scroll to the newest chat message.
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = () => {
    const text = inputMessage.trim();
    if (!text) {
      return;
    }
    setMessages((previousMessages) => [
      ...previousMessages,
      {
        name: "Me",
        message: text,
      },
    ]);

    setInputMessage("");
  };

  // Handle refreshing or directly opening /watch.
  if (!title && !artCsv) {
    return (
      <main className="watch-error">
        <h2>Sorry, no artwork was selected! What do you want from me?????</h2>

        <p>
          Return to the Artist's page and select an artwork to view.
        </p>

        <button type="button" onClick={() => navigate("/navigation")}>
          Back to Artist's Page
        </button>
      </main>
    );
  }

  return (
    <main className="container-fluid layout">
      <section className="art-selection">
        <header className="watch-heading">
          <div>
            <h2>{title || "Untitled"}</h2>

            <p>
              Created by{" "}
              {userName
                ? userName.split("@")[0]
                : "Unknown artist"}
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </header>

        <div
          className="g watch-grid"
          ref={gridRef}
          aria-label={`Artwork titled ${title || "Untitled"}`}
        />
      </section>

      <aside className="chat-box">
        <div className="chats" ref={chatRef}>
          {messages.map((message, index) => (
            <div
              className="chat-message"
              key={`${message.name}-${index}`}
            >
              <strong>{message.name}: </strong>
              <span>{message.message}</span>
            </div>
          ))}
        </div>

        <div className="sender">
          <input
            type="text"
            placeholder="Message..."
            value={inputMessage}
            onChange={(event) =>
              setInputMessage(event.target.value)
            }
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                sendMessage();
              }
            }}
            aria-label="Chat message"
          />

          <button type="button" onClick={sendMessage}>
            Send
          </button>
        </div>
      </aside>
    </main>
  );
}