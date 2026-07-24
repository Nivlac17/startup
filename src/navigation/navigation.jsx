import React from 'react';
import { useNavigate } from 'react-router-dom';
import './navigation.css';

export function Navigation() {
      const navigate = useNavigate();
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
          <p>Cal</p>
          <button type="button" onClick={() => navigate('/watch')}>Art Title</button> 
          <button type="button" onClick={() => navigate('/watch')}>Art Title</button> 

        </div>

        <div
          style={{
            border: '2px solid #000',
            padding: '12px',
            marginBottom: '10px',
          }}
        >
          <p>Kyle</p>
          <button type="button" onClick={() => navigate('/watch')}>Art Title</button> 
          <button type="button" onClick={() => navigate('/watch')}>Art Title</button> 
          <button type="button" onClick={() => navigate('/watch')}>Art Title</button> 
          <button type="button" onClick={() => navigate('/watch')}>Art Title</button> 

        </div>

        <div
          style={{
            border: '2px solid #000',
            padding: '12px',
            marginBottom: '10px',
          }}
        >
          <p>Jane</p>
          <button type="button" onClick={() => navigate('/watch')}>Art Title</button> 
          <button type="button" onClick={() => navigate('/watch')}>Art Title</button> 
          <button type="button" onClick={() => navigate('/watch')}>Art Title</button> 
          <button type="button" onClick={() => navigate('/watch')}>Art Title</button> 
          <button type="button" onClick={() => navigate('/watch')}>Art Title</button> 

        </div>

        <div
          style={{
            border: '2px solid #000',
            padding: '12px',
          }}
        >
          <button type="button" onClick={() => navigate('/draw')}>+</button>
          <span> New Art: </span>
          <input type="text" placeholder="Title" />
        </div>
      </div>
    </main>
  );
}