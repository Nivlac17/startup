import React from 'react';
import './navigation.css';

export function Navigation() {
  return (
    <main>
      <h2>Select an art piece or draw new art!</h2>

      <div className="art-card">
        <div
          style={{
            border: '2px solid #000',
            padding: '12px',
            marginBottom: '10px',
          }}
        >
          <p>User</p>
          <button type="button">Art Title</button>
          <button type="button">Art Title</button>
          <button type="button">Art Title</button>
          <button type="button">Art Title</button>
        </div>

        <div
          style={{
            border: '2px solid #000',
            padding: '12px',
            marginBottom: '10px',
          }}
        >
          <p>User</p>
          <button type="button">Art Title</button>
          <button type="button">Art Title</button>
          <button type="button">Art Title</button>
          <button type="button">Art Title</button>
        </div>

        <div
          style={{
            border: '2px solid #000',
            padding: '12px',
            marginBottom: '10px',
          }}
        >
          <p>User</p>
          <button type="button">Art Title</button>
          <button type="button">Art Title</button>
          <button type="button">Art Title</button>
          <button type="button">Art Title</button>
        </div>

        <div
          style={{
            border: '2px solid #000',
            padding: '12px',
          }}
        >
          <button type="button">+</button>
          <span> New Art: </span>
          <input type="text" placeholder="Title" />
        </div>
      </div>
    </main>
  );
}