# Lines of Light

[My Notes](notes.md)

This project is a simple grid art creator, where users will be able to draw pictures by filling in the grid squares with selected colors. The application will provide a blank grid canvas, color selection tools, and the ability to save artwork. The app will also allow other users to watch you draw, and include an option for them to comment on your artwork as you draw, making it possible to play games such as pictionary.

![Design image](sunset.jpeg)



> [!NOTE]
>  If you are not familiar with Markdown then you should review the [documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) before continuing.

## 🚀 Specification Deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] Proper use of Markdown
- [ ] A concise and compelling elevator pitch
- [ ] Description of key features
- [ ] Description of how you will use each technology
- [ ] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Art has inspired humans for countless generations. From the first cave drawings to today’s modern photography, pictures, paintings, and sculptures have shaped the way we think and feel. **Lines of Light** brings that same creative spirit into a simple, accessible digital tool. Using just a grid and a color palette, anyone can create pixel art, doodles, or even play Pictionary with friends on their phone or computer.

### Design

#### Log-in Page
![Design image](SignInPage.png)
#### Navigation Page
![Design image](SelectArtPage.png)
#### Drawing Page
![Design image](DrawArtPage.png)

Here is a sequence diagram that shows how to people would interact with the backend to draw.

```mermaid
sequenceDiagram
    actor Alice
    actor Juan
    actor Bud
    participant Server

    Alice->>Server: Paints a square on the grid
    Server-->>Alice: Confirm change.
    Server-->>Juan:   Update grid with Alice's change
    Server-->>Bud: Update grid with Alice's change

    Juan->>Server: Paints a square on the grid
    Server-->>Juan: Confirm change
    Server-->>Alice: Update grid with Juan's change
    Server-->>Bud: Update grid with Juan's change

    Bud->>Server: Sends chat message
    Server-->>Alice: Display Bud's chat message
    Server-->>Juan: Display Bud's chat message

```


### Key features

- Secure login over HTTPS
- Ability to select and view personal and other users art
- Ability to send messages and chat with the artist
- Blank grid canvas and color selection tools
- Ability to send messages to the artist 


### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Uses correct HTML structure for application. Three HTML pages. One for login, one for selecting a picture, and one for drawing or watching someone draw.
- **CSS** - Application styling that looks good on different screen sizes, uses good whitespace, color choice and contrast.
- **React** - Provides login, display of different pictures to view, drawing tools, display other users art, and use of React for routing and components.
- **Service** - Backend service with endpoints for:
Login
Saving grid data
Loading grid data
- **DB/Login** - MongoDB to store users and their artwork. Secure login system with hashed credentials.
- **WebSocket** - As a user colors the grid, updates are broadcast to all other connected users in real time. A chat feature included for users to comment on an artist work.


## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Server deployed and accessible with custom domain name** - [My server link](https://linesoflight.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **HTML pages** - I created 3 HTML pages that represent the ability to login, select art to view, and a page to draw and view another person drawing.
- [ ] **Proper HTML element usage** - I did not complete this part of the deliverable.
- [ ] **Links** - The login page automatically links to the art selection page. The the art selection buttons link to the drawing page.
- [ ] **Text** - Each of the art piece is represented by a textual description. The chat feature also shows possible chat info.
- [ ] **Images** - I added a picture as the tab icon; I also added images for featured art place holders.
- [ ] **Login placeholder** - Input box and submit button for login.
- [ ] **DB data placeholder** - A place holder to find other user's artwork in db.
- [ ] **WebSocket placeholder** - A chat box available on drawing page, representing real time chats.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Header, footer, and main content body** - I used a common CSS file format to style these four css pages.
- [ ] **Navigation elements** - I used a custom css file type to create my navigation bar.
- [ ] **Responsive to window resizing** - Flexbox did the majority of the heavy lifting. I am happy with how it turrned out.
- [ ] **Application elements** - I used a lot of display:flex to get things to align correctly.
- [ ] **Application text content** - Set all my text to Roboto and it looks nice and clean.
- [ ] **Application images** - I kept all sunset immages the same.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - I did not complete this part of the deliverable.

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.
- [ ] **Supports registration, login, logout, and restricted endpoint** - I did not complete this part of the deliverable.


## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
