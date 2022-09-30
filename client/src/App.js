import "./App.css";
import { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react-web";

import red from "./animation/red.json";
import orange from "./animation/orange.json";
import yellow from "./animation/yellow.json";
import green from "./animation/green.json";
import blue from "./animation/blue.json";
import indigo from "./animation/indigo.json";
import purple from "./animation/purple.json";

import redSound from "./mp3/red.mp3";
import orangeSound from "./mp3/orange.mp3";
import yellowSound from "./mp3/yellow.mp3";
import greenSound from "./mp3/green.mp3";
import blueSound from "./mp3/blue.mp3";
import indigoSound from "./mp3/indigo.mp3";
import purpleSound from "./mp3/purple.mp3";

function App() {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    function removeActiveClasses() {
      cards.forEach((card) => {
        card.classList.remove("active");
      });
    }

    cards.forEach((card) => {
      card.addEventListener("click", () => {
        removeActiveClasses();
        const isActive = card.classList.contains("active");

        if (!isActive) {
          card.classList.add("active");
        }
      });
    });
  });

  // 소리 제어
  const audioRef = useRef(null);

  const handlePlay = () => {
    audioRef.current.play();
  };

  const handlePause = () => {
    audioRef.current.pause();
  };

  return (
    <div className="container">
      <div className="card active">
        <div className="card__inner">
          <Lottie
            options={{ animationData: red, loop: true, autoplay: true }}
          />
        </div>
        <audio
          src={purpleSound}
          autoPlay="autoPlay"
          type="audio/mp3"
          loop="loop"
          ref={audioRef}
        />
      </div>

      <p onClick={handlePlay}>재생</p>
      <p onClick={handlePause}>정지</p>
      <div className="card">
        <div className="card__inner">
          <Lottie
            options={{ animationData: orange, loop: true, autoplay: true }}
          />
        </div>
        {/* <audio
          src={orangeSound}
          autoPlay="autoPlay"
          type="audio/mp3"
          ref={audioRef}
        /> */}
      </div>

      <div className="card">
        <div className="card__inner">
          <Lottie
            options={{ animationData: yellow, loop: true, autoplay: true }}
          />
        </div>
      </div>

      <div className="card">
        <div className="card__inner">
          <Lottie
            options={{ animationData: green, loop: true, autoplay: true }}
          />
        </div>
      </div>

      <div className="card">
        <div className="card__inner">
          <Lottie
            options={{ animationData: blue, loop: true, autoplay: true }}
          />
        </div>
      </div>

      <div className="card">
        <div className="card__inner">
          <Lottie
            options={{ animationData: indigo, loop: true, autoplay: true }}
          />
        </div>
      </div>

      <div className="card">
        <div className="card__inner">
          <Lottie
            options={{ animationData: purple, loop: true, autoplay: true }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
