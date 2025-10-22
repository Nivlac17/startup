# CS 260 Notes


----------------------------------------------------------------------------------------------------------------------------------------------------
## Midterm 1

1. In the following code, what does the link element do?
  <head>
    <link rel="stylesheet" href="styles.css">
  </head>

  The <link> tag defines the relationship between the current document and an external resource.
  The <link> tag is most often used to link to external style sheets or to add a favicon to your website.
  The <link> element is an empty element, it contains attributes only.


2. In the following code,  what does a div tag do?
  <html>
  <head>
  <style>
  .myDiv {
    border: 5px outset red;
    background-color: lightblue;
    text-align: center;
  }
  </style>
  </head>
  <body>

  <div class="myDiv">
    <h2>This is a heading in a div element</h2>
    <p>This is some text in a div element.</p>
  </div>

  </body>
  </html>

  The <div> tag defines a division or a section in an HTML document.
  The <div> tag is used as a container for HTML elements - which is then styled with CSS or manipulated with JavaScript.
  The <div> tag is easily styled by using the class or id attribute.
  Any sort of content can be put inside the <div> tag

3. In the following code, what is the difference between the #title and .grid selector?

  Use #title when you want to style one specific, identifiable element on the page. 
  Use .grid when you want to apply the same style to multiple elements that share a common characteristic or purpose. 
  The main difference is that #title is an ID selector that targets a single, unique HTML element with the id="title" attribute, while .grid is a class selector that targets any element with the class="grid" attribute, potentially multiple elements across the page. #title is more specific because ids must be unique on a page, whereas classes are designed to be reusable.  

  Selector	Example	       Example description
  #id	      #firstname	   Selects the element with id="firstname"
  .class	  .intro         Selects all elements with class="intro"
            p.intro        Selects all <p> elements with class="intro"

4. In the following code, what is the difference between padding and margin?

  Margin || Boarder || Padding || Content

  Margine is the distance or space around the boarder of an html element (space between elements)
  Padding it the distance between the boarder of each element and it's content
  

5. Given this HTML and this CSS how will the images be displayed using flex?

  <style>
    .image-gallery {
      display: flex; /* Establishes a flex container */
      flex-wrap: wrap; /* wraps photos/elements as page shrinks */
      justify-content: center; /* Center images horizontally */
    }

    .image-gallery img {
      width: 100%; /* Make images responsive within their flex item */
      max-width: 300px; /* Limit individual image size */
      object-fit: cover; /* Crop if needed to fill space */
      margin: 10px; /* Add spacing between images */
    }
  </style>


  Other example:


  .gallery-container {
    display: flex;
    flex-wrap: wrap; /* Allow images to wrap */
    justify-content: center; /* Center images within the available space */
    gap: 1em; /* Add space between images */
  }

  .gallery-container img {
    max-width: 100%;
    height: auto; /* Preserve image aspect ratio */
  }

  @media (min-width: 768px) {
    .gallery-container img {
      width: 25%; /* Display four images per row on larger screens */
    }
  }


6. What does the following padding CSS do?
    Padding it the distance between the boarder of each element and it's content
    The CSS padding properties are used to generate space around an element's content, inside of any defined borders.
    padding-top - sets the top padding of an element
    padding-right - sets the right padding of an element
    padding-bottom - sets the bottom padding of an element
    padding-left - sets the left padding of an element



7. What does the following code using arrow syntax function declaration do?
  Arrow functions allows a shorter syntax for function expressions. You don't need the function keyword, the return keyword, and the curly brackets:

  Function to compute the product of a and b
  Before Arrow:
  let myFunction = function(a, b) {return a * b}

  With Arrow
  let myFunction = (a, b) => a * b;

8. What does the following code using map with an array output?
  The map() method, when used with an array in JavaScript, creates a new array by calling a provided function on every element in the original array. The original array remains unchanged. 
  Here's an example:

  const numbers = [1, 2, 3, 4];

  // Use map to create a new array with each number doubled
  const doubledNumbers = numbers.map(function(number) {
    return number * 2;
  });

  console.log(doubledNumbers); // Output: [4, 6, 8, 18]
  console.log(numbers);       // Output: [1, 2, 3, 4] (original array is unchanged)


      In this example:
      numbers is the original array.
      numbers.map() is called with a callback function.
      The callback function function(number) { return number * 2; } is executed for each element in numbers.
      For each element, the callback function returns the element multiplied by 2.
      map() collects these returned values into a new array, doubledNumbers.
      The console.log() statements demonstrate that doubledNumbers contains the transformed values, while numbers retains its original values.


9. What does the following code output using getElementByID and addEventListener?

  The document.getElementById() method is used to retrieve a specific HTML element from the Document Object Model (DOM) by its unique id attribute. The addEventListener() method is then used to attach an event handler function to that element, which will be executed when a specified event occurs on the element.
  
  Example:
  Consider the following HTML and JavaScript code:
  Code

  <!DOCTYPE html>
  <html>
  <head>
  <title>Event Listener Example</title>
  </head>
  <body>

  <button id="myButton">Click me!</button>
  <p id="message"></p>

  <script>
    const myButton = document.getElementById('myButton');
    const messageParagraph = document.getElementById('message');

    myButton.addEventListener('click', function() {
      messageParagraph.textContent = 'Button was clicked!';
    });
  </script>

  </body>
  </html>
  Output:
  Initially, when the page loads, the HTML elements will be displayed: a button labeled "Click me!" and an empty paragraph.
  When the user clicks the "Click me!" button, the click event is triggered.
  The addEventListener() method, which is listening for a click event on myButton, will then execute the provided anonymous function.
  Inside this function, messageParagraph.textContent is updated, and the text "Button was clicked!" will appear within the paragraph element.


10. What does the following line of Javascript do using a # selector?
    In JavaScript, a hashtag (#) used within a selector string indicates that you are targeting an HTML element by its unique id attribute. It is most often used with the document.querySelector() or document.querySelectorAll() methods. 
  How it works
  The document.querySelector() method takes a CSS selector as an argument and returns the first matching element it finds in the Document Object Model (DOM). Since HTML id attributes are meant to be unique, the # selector is used to select a single, specific element. 
  Example
  Given the following HTML:
  html
  <h1 id="main-heading">Welcome</h1>
  <p>This is some introductory text.</p>
  To select the <h1> element using its ID in JavaScript, you would write:
  javascript:
  const mainHeading = document.querySelector("#main-heading");
  After running this code, the mainHeading variable will hold a reference to the <h1> element, allowing you to manipulate its properties, content, or style. 
  Key differences with other selectors
  document.getElementById(): This older method is used specifically for selecting elements by ID and does not require the # prefix. For example: document.getElementById("main-heading"). However, querySelector() is more versatile because it can select by ID, class, tag, or any complex CSS selector.
  Class selectors: To select elements by their class name, you use a period (.) in the selector string (e.g., document.querySelector(".my-class")). Unlike IDs, multiple elements can share the same class, and querySelector() will still only return the first one. 

11. Which of the following are true? (mark all that are true about the DOM)
  DOM (Document Object Model): 

    The DOM represents a document as a hierarchical tree structure: This is a core concept of the DOM. Each element in a document is considered a node, and these nodes are organized in a tree-like structure. The root node is at the top, and other elements are nested beneath it. 
    The DOM allows for programmatic manipulation of documents: Using scripting languages like JavaScript, developers can access and modify the DOM. This enables them to dynamically change the content, structure, and style of a web page. 
    The DOM is a vendor-neutral standard: This means that it's not tied to any specific browser or implementation. Different browsers all support the DOM, allowing developers to write code that works across various platforms. 
    The DOM provides access to document elements and their properties: Developers can use JavaScript to access individual elements in the DOM tree and retrieve information about their attributes, such as their text content or class names. 
    The DOM is used extensively for creating interactive web applications: Many common web features, such as dynamic content updates, form validation, and user interface interactions, rely on the DOM. 

12. By default, the HTML span element has a default CSS display property value of: 
    By default, the HTML <span> element has a CSS display property value of inline. This means it does not start on a new line and only takes up as much width as its content requires.

13. How would you use CSS to change all the div elements to have a background color of red?
  <style>
    div {
      background-color: red;
    }
  </style>

14. How would you display an image with a hyperlink in HTML?
  To display an image with a hyperlink in HTML (so clicking the image takes you to another page), you wrap the <img> tag inside an <a> (anchor) tag.

    Here’s the syntax:

    <a href="https://www.example.com">
      <img src="image.jpg" alt="Description of image" width="300" height="200">
    </a>

    Explanation:

    <a href="https://www.example.com"> → creates the link to the target webpage.

    <img src="image.jpg"> → displays the image.

    alt="Description of image" → provides alternative text if the image doesn’t load (and improves accessibility).
    width and height (optional) → define the size of the image.


15. In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
  The CSS box model defines how elements are rendered on a webpage as rectangular boxes. The layers of these boxes, starting from the inside and working outwards, are:
  Content: This is the innermost area, containing the actual content of the element, such as text, images, or other media.
  Padding: This layer surrounds the content and creates space between the content and the element's border. Padding is inside the element's background.
  Border: This is a line that wraps around the padding and content, defining the visual edge of the element.
  Margin: This is the outermost layer, creating space outside the border to separate the element from other elements on the page. Margins are transparent and do not    have a background. 

16. Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?
    Because CSS can only select and style HTML elements, you must wrap the word "trouble" in its own HTML element, like a <span>, before you can target it. 
    Modified HTML
    html
    <p>
      This text has <span class="green-text">trouble</span> and double.
    </p>
    CSS
    To apply the styling, create a CSS class that sets the text color to green and then apply that class to the <span>. 
    css
    .green-text {
      color: green;
    }
    Explanation
    HTML: An inline <span> element is used to wrap the specific word ("trouble") without causing a line break. The class="green-text" attribute is added to the <span> so it can be targeted by CSS.
    CSS: The .green-text class selector targets only the <span> element with that specific class name. The color: green; property is then applied exclusively to the text inside that element, leaving the rest of the text in the <p> tag unaffected. 

17. What will the following code output when executed using a for loop and console.log?
    A for loop in JavaScript iterates a block of code a specified number of times. The console.log() method is used within the loop to print values or messages to the console during each iteration.
  For example, consider the following code:
  JavaScript

  for (let i = 0; i < 3; i++) {
    console.log("Iteration number: " + i);
  }
  When this code is executed, the for loop will run three times. In each iteration, the value of i will be printed to the console, prefixed with the string "Iteration number: ". The output would be:
  Code

  Iteration number: 0
  Iteration number: 1
  Iteration number: 2
  The exact output will depend on the statements within the for loop and the values being logged by console.log(). If the code snippet is provided, a more specific output can be given.


18. How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
    To select an element with the id of "byu" and change its text color to green using JavaScript, you would use the document.getElementById() method to access the element and then modify its style.color property. 
    Here is a full, practical example that includes the HTML and JavaScript:
    HTML
    First, create an HTML element with the specified ID.
    html
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>JavaScript Color Change</title>
    </head>
    <body>

      <p id="byu">This is the element you will change.</p>

      <button onclick="changeColor()">Change Color</button>

      <script src="script.js"></script>

    </body>
    </html>
    JavaScript
    Next, write the JavaScript to perform the action. You can place this code in a separate file (e.g., script.js) or within a <script> tag in your HTML. 
    javascript
    // A function that changes the color of the element
    function changeColor() {
      // 1. Select the element by its ID
      const myElement = document.getElementById("byu");

      // 2. Change the 'color' property of the element's style
      myElement.style.color = "green";
    }
    Explanation of the code
    document.getElementById("byu"): This is the core method for selecting the element. It returns a reference to the single element in the document with the matching id attribute.
    .style.color: Once you have a reference to the element, you can access its inline CSS styles through the .style property. The .color property specifically controls the text color.
    = "green": The assignment operator sets the value of the style.color property to the string "green", which triggers the browser to re-render the element with the new color. 

19. What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
     paragraph.
Code

    <p>
ordered list.
Code

    <ol>
unordered list.
Code

    <ul>
Second Level Heading.
Code

    <h2>
First Level Heading.
Code

    <h1>
Third Level Heading.
Code

    <h3>

20. How do you declare the document type to be html?
    You declare the document type to be HTML by placing the DOCTYPE declaration at the very top of your HTML file:

  <!DOCTYPE html>

  Explanation:
  <!DOCTYPE html> tells the browser that the document is written in HTML5 (the current standard).
  It must appear before the <html> tag — at the very beginning of the document.

21. What is valid javascript syntax for if, else, for, while, switch statements?
    1. if and else Statements:
      JavaScript

      if (condition) {
        // Code to execute if condition is true
      } else {
        // Code to execute if condition is false
      }

      // Optional: else if for multiple conditions
      if (condition1) {
        // Code for condition1
      } else if (condition2) {
        // Code for condition2
      } else {
        // Code if no conditions are met
      }
      2. for Loop:
      JavaScript

      for (initialization; condition; increment/decrement) {
        // Code to execute in each iteration
      }

      // Example:
      for (let i = 0; i < 5; i++) {
        console.log(i); // Outputs 0, 1, 2, 3, 4
      }
      3. while Loop:
      JavaScript

      while (condition) {
        // Code to execute as long as the condition is true
      }

      // Example:
      let count = 0;
      while (count < 3) {
        console.log(count); // Outputs 0, 1, 2
        count++;
      }
      4. do...while Loop:
      JavaScript

      do {
        // Code to execute at least once, then as long as the condition is true
      } while (condition);

      // Example:
      let i = 0;
      do {
        console.log(i); // Outputs 0, 1, 2
        i++;
      } while (i < 3);
      5. switch Statement:
      JavaScript

      switch (expression) {
        case value1:
          // Code to execute if expression === value1
          break; // Important to prevent "fall-through"
        case value2:
          // Code to execute if expression === value2
          break;
        default:
          // Code to execute if no case matches
      }

      // Example:
      let day = "Monday";
      switch (day) {
        case "Monday":
          console.log("Start of the week.");
          break;
        case "Friday":
          console.log("End of the week.");
          break;
        default:
          console.log("Mid-week day.");
      }

22. What is the correct syntax for creating a javascript object?
    The correct syntax for creating a JavaScript object is using curly braces {} with key–value pairs (also called properties).

    ✅ Basic Object Syntax:
    let objectName = {
      key1: value1,
      key2: value2,
      key3: value3
    };

    🧩 Example:
    let person = {
      name: "Calvin",
      age: 21,
      isStudent: true
    };

23. Is it possible to add new properties to javascript objects?
    Yes, it is possible to add new properties to JavaScript objects dynamically, even after the object has been created. JavaScript objects are mutable and dynamic, allowing for the addition, modification, or deletion of properties at any time.
    There are several ways to add properties to an existing JavaScript object: 
    Dot Notation: This method is used when the property name is known and is a valid JavaScript identifier.
    JavaScript

        const myObject = {
          name: "Alice",
          age: 30
        };
        myObject.city = "New York";
        console.log(myObject); // { name: 'Alice', age: 30, city: 'New York' }
    Bracket Notation: This method is used when the property name is dynamic (e.g., stored in a variable) or when it contains special characters or spaces that make it an invalid identifier for dot notation.
    JavaScript

        const myObject = {
          name: "Bob"
        };
        const newProperty = "occupation";
        myObject[newProperty] = "Engineer";
        console.log(myObject); // { name: 'Bob', occupation: 'Engineer' }

        myObject["favorite color"] = "blue";
        console.log(myObject); // { name: 'Bob', occupation: 'Engineer', 'favorite color': 'blue' }
    Object.assign(): This method can be used to copy the values of all enumerable own properties from one or more source objects to a target object. It can effectively add new properties by merging an object with the desired new properties into an existing object. 
    JavaScript

        const myObject = {
          id: 1
        };
        const newProperties = {
          status: "active",
          createdAt: new Date()
        };
        Object.assign(myObject, newProperties);
        console.log(myObject); // { id: 1, status: 'active', createdAt: [Date object] }


24. If you want to include JavaScript on an HTML page, which tag do you use?
    <script>
      alert("Hello, World!");
    </script>

25. Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
    <p id="myPara">fish are a type of animal</p>

    <script>
      const para = document.getElementById("myPara");
      para.innerHTML = para.innerHTML.replace("animal", "crow");
    </script>

26. Which of the following correctly describes JSON?
    It seems like the answer options are missing from your query. JSON stands for JavaScript Object Notation. It's a lightweight, text-based format for representing structured data. It's often used for data interchange between different systems, especially web applications. Here are some key points about JSON: 
    Structure: JSON is based on JavaScript object syntax. Data is organized in key-value pairs, enclosed in curly braces {}. Objects can contain nested objects and arrays. Arrays are ordered collections of values, enclosed in square brackets []. 
    Readability: JSON is designed to be human-readable. The syntax is simple and easy to understand, even for those not familiar with JavaScript. 
    Language Independent: While JSON is derived from JavaScript, it's independent of any programming language. This makes it widely usable across different platforms. 
    Common Uses: JSON is frequently used for API communication, data serialization, storing and retrieving data in databases, and front-end development. 
    For the most accurate answers to multiple choice questions, try including the answer options in your search.


27. What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?

    | Command     | Meaning                                                                            | Example                                                          |
| ----------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| **`pwd`**   | Prints the **current working directory** (shows where you are in the file system). | `pwd` → `/home/calvin/projects`                                  |
| **`cd`**    | **Changes directory** (move between folders).                                      | `cd Documents` or `cd ..` (go up one folder)                     |
| **`ls`**    | **Lists files and folders** in the current directory.                              | `ls -l` (shows detailed list), `ls -a` (shows hidden files)      |
| **`mkdir`** | **Creates a new directory (folder).**                                              | `mkdir myFolder`                                                 |
| **`mv`**    | **Moves or renames** files and directories.                                        | `mv file.txt newFolder/` or `mv oldname.txt newname.txt`         |
| **`rm`**    | **Removes (deletes)** files or directories.                                        | `rm file.txt`, `rm -r folderName` (delete folder recursively ⚠️) |
| **`chmod`** | **Changes file permissions** (who can read/write/execute).                         | `chmod 755 script.sh` (owner full access, others read/execute)   |



| Command    | Meaning                                                         | Example          |
| ---------- | --------------------------------------------------------------- | ---------------- |
| **`vim`**  | Opens the **Vim text editor** (powerful, but advanced).         | `vim myFile.txt` |
| **`nano`** | Opens the **Nano text editor** (simpler and beginner-friendly). | `nano notes.txt` |



| Command    | Meaning                                                    | Example                                     |
| ---------- | ---------------------------------------------------------- | ------------------------------------------- |
| **`man`**  | Displays the **manual (help)** page for a command.         | `man ls` (shows help for the `ls` command)  |
| **`ps`**   | Shows a list of **running processes**.                     | `ps aux` (shows all processes with details) |
| **`sudo`** | Runs a command with **superuser (admin) privileges**.      | `sudo apt update`                           |
| **`ssh`**  | Connects to a **remote computer securely** (Secure Shell). | `ssh user@server.com`                       |
| **`wget`** | **Downloads files** from the internet via command line.    | `wget https://example.com/file.zip`         |



28. Which of the following console command creates a remote shell session?
        ssh username@remote_host

29. Which of the following is true when the -la parameter is specified for the ls console command?
    The "-la" parameter specified for the ls console command lists all files and directories in a directory, including hidden files, and displays them in long format, showing detailed information like file permissions, size, owner, and timestamps. 
    Key points about "-la":
    "-a": This flag shows hidden files, which normally start with a dot. 
    "-l": This flag provides a long listing format, displaying detailed information about each file and directory. 

30. Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
    | Part                        | Type                                | Explanation                                                             |
  | --------------------------- | ----------------------------------- | ----------------------------------------------------------------------- |
  | **.click**                  | **Top-Level Domain (TLD)**          | The highest level — like `.com`, `.org`, `.edu`, etc.                   |
  | **bozo.click**              | **Root Domain**                     | The main domain name (TLD + second-level domain).                       |
  | **fruit.bozo.click**        | **Subdomain**                       | A domain added before the root domain.                                  |
  | **banana.fruit.bozo.click** | **Subdomain (of fruit.bozo.click)** | A **nested subdomain** — “banana” is a subdomain of “fruit.bozo.click.” |

  Summary:
  Top-Level Domain (TLD): click
  Root Domain: bozo.click
  Subdomains:
  fruit.bozo.click → subdomain of bozo.click
  banana.fruit.bozo.click → subdomain of fruit.bozo.click


  31. Is a web certificate is necessary to use HTTPS.
      Yes, a web certificate (specifically, an SSL/TLS certificate) is necessary to use HTTPS.

  🧩 Explanation:
  HTTPS (HyperText Transfer Protocol Secure) is the secure version of HTTP.
  It encrypts the data exchanged between a user’s browser and the web server — protecting it from eavesdropping or tampering.
  This encryption only works if the server has a valid SSL/TLS certificate installed.
  🔐 What the certificate does:
  Authenticates the website’s identity — proves the site is really who it claims to be.
  Enables encryption — establishes a secure, encrypted connection using SSL/TLS.
  Builds trust — browsers show a padlock icon for sites with valid certificates.
  ⚙️ Without a certificate:
  The site can only use HTTP, not HTTPS.
  Browsers will show warnings like:
  “Your connection is not private.”
  Sensitive data (like passwords or credit card numbers) could be intercepted.


32. Can a DNS A record can point to an IP address or another A record.
    A DNS A record (Address record) points directly to an IP address, not to another A record.
  🧩 Explanation:
  A record: Maps a domain name to an IPv4 address.
  Example:
  example.com → 192.0.2.1
  You cannot make an A record point to another A record. If you want one domain to refer to another, you use a CNAME record (Canonical Name).
  ✅ Example:
  A record:
  www.example.com  A  192.0.2.1
  CNAME record (points to another domain that has an A record):
  blog.example.com  CNAME  www.example.com
  Here, blog.example.com points to www.example.com, which in turn resolves to the IP via its A record.
  Summary:
  A record → IP address ✅
  A record → another A record ❌ (use CNAME for that)

33. Port 443, 80, 22 is reserved for which protocol?
    | Port    | Protocol | Purpose                                                                         |
| ------- | -------- | ------------------------------------------------------------------------------- |
| **80**  | HTTP     | Used for **unencrypted web traffic**.                                           |
| **443** | HTTPS    | Used for **encrypted web traffic** (HTTP over SSL/TLS).                         |
| **22**  | SSH      | Used for **Secure Shell** — remote login and secure file transfers (SFTP, SCP). |



34. What will the following code using Promises output when executed?
    The code will output 1, 2, and 3 in that order. The first console.log(1) executes immediately. The new Promise(...) starts its execution, but the setTimeout defers the resolve() call. The next line, console.log(2), is not inside the promise, so it also executes immediately. After one second, the setTimeout function runs, and its callback console.log(3) executes, printing 3. 
  
  console.log(1): This runs immediately because it's outside the promise executor and the setTimeout hasn't fired yet.
  console.log(2): This is also outside the promise executor, so it runs immediately as well, after the first console.log. 
  console.log(3): This is inside the setTimeout callback, which is delayed by 1000 milliseconds (1 second). After the delay, the function inside setTimeout is called, and it prints 3 to the console. 
  Therefore, the output is:
  Code

  1
  2
  3








----------------------------------------------------------------------------------------------------------------------------------------------------

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
