import React from "react";
import './quote.css';


export function Quote() {
return (
     <main className="container-fluid ">
      <div>
      <h1>Here is our Inspirational Quote!</h1>
      <div id="quote" className="quote-box bg-light text-dark">
          <p className="quote">Veni, Vidi, Vici</p>
          <p className="author">Julius</p>
        </div>
    </div>
    </main>
);
}