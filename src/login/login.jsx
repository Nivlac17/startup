import React from 'react';
import './login.css';


export function Login() {
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
        <button type="submit">Login</button>
        <button type="submit">Register</button>
      </form>
    </main>
  );
}