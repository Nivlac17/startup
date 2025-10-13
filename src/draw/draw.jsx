import React, { useEffect, useRef } from "react";
import "./draw.css";

export function Draw() {
  const gridRef = useRef(null);
  const CELLS = 4560;

  useEffect(() => {
    const g = gridRef.current;
    if (!g) return;
    g.innerHTML = "";
    const frag = document.createDocumentFragment();
    for (let i = 0; i < CELLS; i++) {
      const d = document.createElement("div");
      d.className = "c"; 
      d.contentEditable = "false";
      frag.appendChild(d);
    }

    g.appendChild(frag);
  }, []);

  return (
    <main className="container-fluid layout">
      <aside className="color-palet">
        <div className="gridcolor">
          <button style={{ background: "yellow" }}></button>
          <button style={{ background: "blue" }}></button>
          <button style={{ background: "red" }}></button>
          <button style={{ background: "green" }}></button>
          <button style={{ background: "pink" }}></button>
          <button style={{ background: "purple" }}></button>
          <button style={{ background: "grey" }}></button>
          <button style={{ background: "orange" }}></button>
          <button style={{ background: "black" }}></button>
          <button style={{ background: "whitesmoke" }}></button>
        </div>
      </aside>

      <section className="art-selection">
        <div className="g" id="g" ref={gridRef}></div>
      </section>

      <div className="chat-box">
        <div className="chats">
          <div><p>Hello</p></div>
          <div><p>Hello</p></div>
          <div><p>Hello</p></div>
          <div><p>Hello</p></div>
          <div><p>Hello</p></div>
          <div><p>Hello</p></div>
          <div><p>Hello</p></div>
          <div><p>These are messages!</p></div>
          <div><p>Try and read these messages!</p></div>
          <div><p>this is hello from A-a-ron!</p></div>
          <div><p>Hello</p></div>
        </div>
          <div className="sender">
              <button>Send</button>
              <label for="count"></label>
              <input type="text" id="count" value="Message" readonly />
          </div>
      </div>
    </main>
  );
}