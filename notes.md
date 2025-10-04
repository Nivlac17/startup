# CS 260 Notes

HTML code for a box with label and buttons in it
<div style="border:2px solid #000; padding:12px; margin-bottom:10px; max-width:400px;">
            User
            <button type="submit">Art Title</button>
            <button type="submit">Art Title</button>
            <button type="submit">Art Title</button>
            <button type="submit">Art Title</button>
</div>

HTML code for adding an image
 <div>
  <h4>Beutiful Sunset</h4>
    <img src="../sunset.jpeg" alt="Sunset" width="200">
</div>




CSS Code Example of Draw page:

body {
  display: flex;
  flex-direction: column;
  min-width: 375px;
  background-color: rgb(2, 31, 41);
  color: white;
}

a {
  color: grey;
  text-decoration: none;
}


header {
  flex: 0 10px;
  background-color: rgb(2, 7, 20);
}

menu {
  flex: 1;
  display: flex; 
  flex-direction: row;
  gap: 2em;
  list-style: none;
  text-decoration: none;
} 

.g{
    display:grid;
    grid-template-columns:repeat(60,20px);
    column-gap:1.5px;
    row-gap: 1.5px;
    margin: 40px auto 0;
}

.c{
    aspect-ratio: 1 / 1;
    display: grid;
    place-items: center;
    border-radius: 1px;
}



main {
  flex: 1 calc(100vh - 700px);
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: space-around;
}

.art-selection {
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  padding-top: 16px;
}

.color-palet {
    flex: 0 0 250px;
    align-self: flex-start;
    justify-content: flex-start;
    align-items: left;
    margin: 12% auto 0;
}

.gridcolor {
  display: grid;
  grid-template-columns: repeat(2, 50px);
  gap: 10px;
}
.gridcolor button {
  width: 50px;
  height: 50px;
  border: none;
  cursor: pointer;
}

footer {
  flex: 0 30px;
}


form {
  display: flex;
  flex-direction: column;
  align-items : left;
}

form input {
  padding: 0.5em;
  font-size: 1em;
  border-radius: 20px;
  width: 200px;
  max-width: 80%; 
  justify-content: left;
}



button {
  background-color: rgb(49, 99, 224);
  color: white;
  border: 2px solid black;
  border-radius: 7px;
  padding: 0.5em 1em;
  font-size: 1em;
  font: 300;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

button:hover {
  background-color: rgb(85, 94, 117);
}



@media (orientation: portrait) {
  main {
    flex-direction: column;
  }
}

@media (max-height: 700px) {
  header {
    display: none;
  }
  footer {
    display: none;
  }
}










this is me editing my notes page, I am invited to write what I learned. I already know a lot about git, but I was very interested by heading syntax given in [this page](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).



[My startup - Simon](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

My IP address is: 54.81.96.130
Launching my AMI I initially put it on a private subnet. Even though it had a public IP address and the security group was right, I wasn't able to connect to it.

## Caddy

No problems worked just like it said in the [instruction](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md).

## HTML

This was easy. I was careful to use the correct structural elements such as header, footer, main, nav, and form. The links between the three views work great using the `a` element.

The part I didn't like was the duplication of the header and footer code. This is messy, but it will get cleaned up when I get to React.

## CSS

This took a couple hours to get it how I wanted. It was important to make it responsive and Bootstrap helped with that. It looks great on all kinds of screen sizes.

Bootstrap seems a bit like magic. It styles things nicely, but is very opinionated. You either do, or you do not. There doesn't seem to be much in between.

I did like the navbar it made it super easy to build a responsive header.

```html
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">
            <img src="logo.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
            Calmer
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="play.html">Play</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="index.html">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
```

I also used SVG to make the icon and logo for the app. This turned out to be a piece of cake.

```html
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#0066aa" rx="10" ry="10" />
  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="72" font-family="Arial" fill="white">C</text>
</svg>
```

## React Part 1: Routing

Setting up Vite and React was pretty simple. I had a bit of trouble because of conflicting CSS. This isn't as straight forward as you would find with Svelte or Vue, but I made it work in the end. If there was a ton of CSS it would be a real problem. It sure was nice to have the code structured in a more usable way.

## React Part 2: Reactivity

This was a lot of fun to see it all come together. I had to keep remembering to use React state instead of just manipulating the DOM directly.

Handling the toggling of the checkboxes was particularly interesting.

```jsx
<div className="input-group sound-button-container">
  {calmSoundTypes.map((sound, index) => (
    <div key={index} className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        value={sound}
        id={sound}
        onChange={() => togglePlay(sound)}
        checked={selectedSounds.includes(sound)}
      ></input>
      <label className="form-check-label" htmlFor={sound}>
        {sound}
      </label>
    </div>
  ))}
</div>
```
