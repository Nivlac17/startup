import React, { useEffect, useState } from "react";
import "./navigation.css";
import { useNavigate } from "react-router-dom";



export function Navigation() {
      const navigate = useNavigate();

      const [newArtName, setNewArtName] = useState("");
      const [portfolio, setPortfolio] = useState([]);
      const [loading, setLoading] = useState(true);
      
      const viewArt = (art) => {
      navigate("/watch", {
            state: {
            userName: art.userName,
            title: art.title,
            artCsv: art.artCsv,
            },
      });
      };

      const drawArt = () => {
            if (!newArtName.trim()) return;
            navigate("/draw", {
            state: { artTitle: newArtName.trim() },  
      });
      setNewArtName(""); 
      };

      useEffect(() => {
            const fetchPortfolio = async () => {
                  try {
                        const res = await fetch("/api/portfolio/all");
                  if (!res.ok) {
                        console.error("Failed to load portfolio");
                        setLoading(false);
                        return;
                  }
                  const data = await res.json();
                  setPortfolio(data);
                  } catch (err) {
                        console.error("Error loading portfolio:", err);
                  } finally {
                        setLoading(false);
                  }
            };

            fetchPortfolio();
      }, []);

      const groupedByUser = portfolio.reduce((acc, art) => {
      const email = art.userName || "";
      const rawName = email.split("@")[0] || "Unknown";
      const displayName = rawName.charAt(0).toUpperCase() + rawName.slice(1);

      if (!acc[displayName]) {
            acc[displayName] = [];
      }
      acc[displayName].push(art);
      return acc;
      }, {});




return (
     <main>
            <div className="art-selection">
            <h1>Select an art piece or draw new art!</h1>

            <div className="selection-style">
            <button onClick={drawArt}>+</button>
            New Art:
            <input
                  type="text"
                  placeholder="Name"
                  value={newArtName}
                  onChange={(e) => setNewArtName(e.target.value)}
            />
            </div>

            {loading && <p>Loading portfolio...</p>}

            {!loading &&
            Object.entries(groupedByUser).map(([artistName, arts]) => (
                  <div className="selection-style" key={artistName}>
                  {artistName}:
                  {arts.map((art) => (
                  <button key={art._id} onClick={() => viewArt(art)}>
                        {art.title}
                  </button>
                  ))}
                  </div>
            ))}
            </div>


          <div className="featured-art">
                <h3>Featured Art: </h3>
                <div>
                <h4>Beautiful Sunset</h4>
                <img src="sunset.jpeg" alt="Sunset" width="200"/>
                </div>
                <div>
                <h4>Still a Sunset</h4>
                <img src="sunset.jpeg" alt="Sunset" width="200"/>
                </div>
                <div>
                <h4>Wow it's... a Sunset</h4>
                <img src="sunset.jpeg" alt="Sunset" width="200"/>
                </div>
        </div>        
    </main>
);
}