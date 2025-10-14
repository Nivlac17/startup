import React from "react";
import "./navigation.css";


export function Navigation() {
return (
     <main>
            <div className="art-selection">

              <h1>Select an art piece or draw new art!</h1>          
              <div className="selection-style">
                    User:
                    <button type="submit">Art Title</button>
                    <button type="submit">Art Title</button>
                    <button type="submit">Art Title</button>
                    <button type="submit">Art Title</button>
                    <button type="submit">Art Title</button>
              </div>

              <div className="selection-style">
                    User:
                    <button type="submit">Art Title</button>
                    <button type="submit">Art Title</button>
                    <button type="submit">Art Title</button>
              </div>

              <div className="selection-style">
                    User:
                    <button type="submit">Art Title</button>
                    <button type="submit">Art Title</button>
                    <button type="submit">Art Title</button>
                    <button type="submit">Art Title</button>
              </div>
            
              <div className="selection-style">
                <button type="submit">+</button>
                New Art: 
                <input type="text" placeholder="Name" />
              </div>
            </div>  


          <div className="featured-art">
                <h3>Featured Art: </h3>
                <div>
                <h4>Beutiful Sunset</h4>
                <img src="sunset.jpeg" alt="Sunset" width="200"/>
                </div>
                <div>
                <h4>Beutiful Sunset</h4>
                <img src="sunset.jpeg" alt="Sunset" width="200"/>
                </div>
                <div>
                <h4>Beutiful Sunset</h4>
                <img src="sunset.jpeg" alt="Sunset" width="200"/>
                </div>
        </div>        
    </main>
);
}