import React from 'react';
import './draw.css';

export function Draw() {
  const cells = Array.from({ length: 2520 });

  return (
    <main className="layout">
      <aside className="color-palet">
        <div className="gridcolor">
          <button style={{ background: 'yellow' }} />
          <button style={{ background: 'blue' }} />
          <button style={{ background: 'red' }} />
          <button style={{ background: 'green' }} />
          <button style={{ background: 'pink' }} />
          <button style={{ background: 'purple' }} />
          <button style={{ background: 'grey' }} />
          <button style={{ background: 'orange' }} />
          <button style={{ background: 'black' }} />
          <button style={{ background: 'whitesmoke' }} />
        </div>
      </aside>

      <section className="art-selection">
        <div className="g">
          {cells.map((_, index) => (
            <div
              key={index}
              className="c"
              contentEditable={false}
              style={{ background: '#fff' }}
            />
          ))}
        </div>
      </section>

      <div id="chat-box">
        <div><p>Hello</p></div>
        <div><p>These are messages!</p></div>
        <div><p>Try and read these messages!</p></div>
        <div><p>This is hello from A-a-ron!</p></div>
        <div><p>Hello</p></div>

        <button>Send</button>

        <label htmlFor="count"></label>
        <input
          type="text"
          id="count"
          value="Message"
          readOnly
        />
      </div>
    </main>
  );
}