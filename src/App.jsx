import React, { useState } from "react";
import "./App.css";

function App() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAlbum = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="app">
      <section id="content">
        <header>
          <div>
            <h1>MyTunes</h1>
          </div>
        </header>

        <main>
          <div className="artist-container">
            <div className="artist">
              <img
                src="https://i.scdn.co/image/ab6761610000e5eb078fdd734b7f0aa782328428"
                alt="Bryson Tiller"
              />
            </div>

            <div className="artist-albums-container">
              <div className="artist-album">
                <h2>Bryson Tiller's Albums</h2>
              </div>

              <details
                className="albums-name"
                open={openIndex === 1}
                onClick={() => toggleAlbum(1)}
              >
                <summary>Anniversary</summary>
                <ul className="song-list">
                  <li>Still Yours</li>
                  <li>Timeless Interlude</li>
                  <li>Leaning</li>
                  <li>Inhale</li>
                  <li>Next To You</li>
                  <li>Outta Time</li>
                </ul>
              </details>

              <details
                className="albums-name"
                open={openIndex === 2}
                onClick={() => toggleAlbum(2)}
              >
                <summary>TrapSoul</summary>
                <ul className="song-list">
                  <li>Intro</li>
                  <li>Don't</li>
                  <li>Exchange</li>
                  <li>Sorry Not Sorry</li>
                  <li>Just Another Interlude</li>
                  <li>Self Righteous</li>
                </ul>
              </details>

              <details
                className="albums-name"
                open={openIndex === 3}
                onClick={() => toggleAlbum(3)}
              >
                <summary>True To Self</summary>
                <ul className="song-list">
                  <li>For However Long</li>
                  <li>Don't Get Too High</li>
                  <li>Run Me Dry</li>
                  <li>Rambo</li>
                  <li>Self-Made</li>
                </ul>
              </details>

              <details
                className="albums-name"
                open={openIndex === 4}
                onClick={() => toggleAlbum(4)}
              >
                <summary>Let Me Explain</summary>
                <ul className="song-list">
                  <li>Let Me Explain</li>
                  <li>Trapsoul</li>
                  <li>Been That Way</li>
                  <li>Don't</li>
                  <li>Understand</li>
                </ul>
              </details>
            </div>
          </div>
        </main>

        <footer>
          <div>
            <div className="tune-footer">
              BCIT-D3-COMP3170 - Zalida Khan-A01375976
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default App;
