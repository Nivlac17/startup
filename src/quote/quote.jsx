import React from "react";
import './quote.css';

export function Quote() {
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');

    React.useEffect(() => {

    fetch('https://quote.cs260.click')
    .then((response) => response.json())
    .then((jsonResponse) => {
        console.log(jsonResponse);
        setQuote(jsonResponse.quote);
        setQuoteAuthor(jsonResponse.author);
    });
     }, []);

return (
     <main className="container-fluid ">
        <div id="picture" class="picture-box"><img width="400px" src="temple.jpg" alt="random" /></div>

      <div>
      <h1>Inspiration</h1>
      <div id="quote" className="quote-box">
          <p className='quote'>{quote}</p>
          <p className='author'>{quoteAuthor}</p>
        </div>
    </div>
    </main>
);
}



//                 Sometimes the things that may or may not be true are the things a man needs to believe in the most. 
//                 That people are basically good; that honor, courage, and virtue mean everything; that power and money, 
//                 money and power mean nothing; that good always triumphs over evil; and I want you to remember this, that love... 
//                 true love never dies. You remember that, boy. You remember that. Doesn't matter if it's true or not. You see, a man 
//                 should believe in those things, because those are the things worth believing in.

//                                - Second Hand Lions, What every boy needs to know about being a man