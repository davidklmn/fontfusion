import React, { useEffect, useState } from "react";
import "./home.css";
import GoogleFontLoader from "react-google-font-loader";

export default function Home() {
  const [currentFont, setFont] = useState("Helvetica");
  // const [weight, setWeight] = useState([400]);

  const changeFont = (e) => {
    e.preventDefault();
    console.log(e.target.fontname.value);
    setFont(e.target.fontname.value);
  };

  return (
    <div className="container">
      <GoogleFontLoader
        fonts={[
          {
            font: currentFont,
            weights: [400, "400i"],
          },
        ]}
      />

      <div className="top-container">
        <h2 id="logo">
          Font<span>Fusion</span>
        </h2>
        <h2 className="how">HOW?</h2>
      </div>

      <div className="content">
        <h1 className="font-name" style={{ fontFamily: currentFont }}>
          Helvetica
        </h1>
        <form onSubmit={changeFont}>
          <input type="text" name="fontname" placeholder={currentFont} />
        </form>

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
          <p style={{ fontFamily: currentFont }}>
            The brown fox jumps over the lazy dog
          </p>
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
