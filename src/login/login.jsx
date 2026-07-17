import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';


export function Login() {
    const navigate = useNavigate();
  return (
    <main>
      
      <h1>Welcome to Lines of Light</h1>
      <form method="get" action="draw.html">
        <div>
          <span>@</span>
          <input type="text" placeholder="your@email.com" />
        </div>
        <div>
          <span>🔒</span>
          <input type="password" placeholder="password" />
        </div>
        <button type="button" onClick={() => navigate('/navigation')}>
          Login
        </button>

        <button type="button" onClick={() => navigate('/navigation')}>
          Register
        </button>
      </form>
    </main>
  );
}

