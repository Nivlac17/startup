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
      <div>
      <h1>Here is our Inspirational Quote!</h1>
      <div id="quote" className="quote-box bg-light text-dark">
          <p className='quote'>{quote}</p>
          <p className='author'>{quoteAuthor}</p>
        </div>
    </div>
    </main>
);
}