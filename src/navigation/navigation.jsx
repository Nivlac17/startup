import React, { useState } from "react";
import "./navigation.css";
import { useNavigate } from "react-router-dom";



export function Navigation() {

      const navigate = useNavigate();
      const [newArtName, setNewArtName] = useState("");



      const viewArt = () => {
            navigate("/watch");
      };

      const drawArt = () => {
            if (!newArtName.trim()) return;
                  navigate("/draw");
      };



return (
     <main>
            <div className="art-selection">

              <h1>Select an art piece or draw new art!</h1>          
              <div className="selection-style">
                    Calvin:
                    <button onClick={viewArt}>Awesomenes!!!!</button>
                    <button onClick={viewArt}>good titlee</button>
                    <button onClick={viewArt}>sleep</button>
                    <button onClick={viewArt}>Time</button>

              </div>

              <div className="selection-style">
                    Fred:
                    <button onClick={viewArt}>Something here</button>
                    <button onClick={viewArt}>Latin</button>
                    <button onClick={viewArt}>random</button>
              </div>

              <div className="selection-style">
                    Dave:
                    <button onClick={viewArt}>Kings</button>
                    <button onClick={viewArt}>supperest awesome art</button>
                    <button onClick={viewArt}>final thing here</button>
                    <button onClick={viewArt}>Art Title</button>
              </div>
            
              <div className="selection-style">
                  <button onClick={drawArt}>+</button>
                  New Art: 
                  <input type="text" placeholder="Name" value={newArtName} onChange={(e) => setNewArtName(e.target.value)}/>
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