import React, { useEffect, useRef, useState } from "react";
import "./draw.css";

export function Draw() {
  const gridRef = useRef(null);
  const CELLS = 4560;


  
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
        <div className="chats">
          <div><p>Hello</p></div>
          <div><p>Hello</p></div>
          <div><p>These are messages!</p></div>
          <div><p>Try and read these messages!</p></div>
          <div><p>this is hello from A-a-ron!</p></div>
          <div><p>Hello</p></div>
        </div>
        <div className="sender">
          <button>Send</button>
          <label htmlFor="count"></label>
          <input type="text" id="count" value="Message" readOnly />
        </div>
      </div>
    </main>
  );
}
