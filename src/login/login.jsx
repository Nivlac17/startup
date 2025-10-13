import React from "react";


export function Login() {
return (
     <main className="container-fluid ">
      <div>
              <h1>Lines of Light</h1>

      <form method="get" to="navigation.html">
        <div>
          {/* <!-- <span>@</span> --> */}
          <input type="text" placeholder="your@email.com" />
        </div>
        <div>
          {/* <!-- <span>🔒</span> --> */}
          <input type="password" placeholder="password" />
        </div>
        <section>
          <button type="submit">Login</button>
          <button type="submit">Register</button>
        </section>
      </form>
            </div>
    </main>
);
}