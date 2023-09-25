import React from "react";
import "./home.css";

export default function Home() {
  return (
    <div className="container">
      <div className="top-container">
        <h2 id="logo">
          Font<span>Fusion</span>
        </h2>
        <h2 className="how">HOW?</h2>
      </div>

      <div className="content">
        <h1 className="font-name">Helvetica</h1>
        <hr />

        <div className="settings">
          <p className="pixel">60px</p>
          <div className="color-container">
            <div className="back-color-rectangle"></div>
            <p className="color">febc49</p>
          </div>
          <div className="color-container">
            <div className="font-color-rectangle"></div>
            <p className="font-color">febc49</p>
          </div>
          <div className="designer-container">
            <p className="designer">
              Designed by <span>Max Miedinger</span>
            </p>
          </div>
        </div>

        <div className="main-text">
          <p>The brown fox jumps over the lazy dog</p>
        </div>

        <div className="font-text">
          <p>This will be all the letters numbers and symbols</p>
        </div>
      </div>

      <footer>
        Website by <span>David Kelemen</span>
      </footer>
    </div>
  );
}
