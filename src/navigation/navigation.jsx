import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./navigation.css";

export function Navigation() {
  const navigate = useNavigate();

  const [newArtName, setNewArtName] = useState("");
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
    const title = newArtName.trim();

    if (!title) {
      setError("Enter a title for your artwork.");
      return;
    }

    navigate("/draw", {
      state: {
        artTitle: title,
      },
    });
  };

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("/api/portfolio/all");

        if (!response.ok) {
          const result = await response.json().catch(() => ({}));

          throw new Error(
            result.msg || `Failed to load portfolio (${response.status})`
          );
        }

        const data = await response.json();

        setPortfolio(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error loading portfolio:", err);
        setError(err.message || "Could not load the portfolio.");
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  const groupedByUser = portfolio.reduce((groups, art) => {
    const email = art.userName || "";
    const rawName = email.split("@")[0] || "Unknown";
    const displayName =
      rawName.charAt(0).toUpperCase() + rawName.slice(1);

    if (!groups[displayName]) {
      groups[displayName] = [];
    }

    groups[displayName].push(art);

    return groups;
  }, {});

  return (
    <main className="navigation-page">
      <h2>Select an art piece or draw new art!</h2>

      {loading && <p>Loading artwork...</p>}

      {error && <p className="navigation-error">{error}</p>}

      {!loading && !error && portfolio.length === 0 && (
        <p>No artwork has been saved yet.</p>
      )}

      <div className="art-card">
        {Object.entries(groupedByUser).map(([displayName, artworks]) => (
          <section className="user-art-group" key={displayName}>
            <h3>{displayName}</h3>

            <div className="art-buttons">
              {artworks.map((art) => (
                <button
                  type="button"
                  key={art._id || `${art.userName}-${art.title}`}
                  onClick={() => viewArt(art)}
                >
                  {art.title || "Untitled"}
                </button>
              ))}
            </div>
          </section>
        ))}

        <section className="new-art-section">
          <button
            type="button"
            className="new-art-button"
            onClick={drawArt}
            aria-label="Create new artwork"
          >
            +
          </button>

          <label htmlFor="new-art-title">New Art:</label>

          <input
            id="new-art-title"
            type="text"
            placeholder="Title"
            value={newArtName}
            onChange={(event) => {
              setNewArtName(event.target.value);
              setError("");
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                drawArt();
              }
            }}
          />
        </section>
      </div>
    </main>
  );
}