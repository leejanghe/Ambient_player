import "./App.css";
import { useState, useEffect } from "react";
import Lottie from "lottie-react-web";
import boom from "../src/animation/boom.json";

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

  return (
    <div className="container">
      <div className="card active">
        <Lottie options={{ animationData: boom, loop: true, autoplay: true }} />
        <h3>빨간 소리</h3>
      </div>

      <div className="card">
        <Lottie options={{ animationData: boom, loop: true, autoplay: true }} />
        <h3>주황 소리</h3>
      </div>

      <div className="card">
        <Lottie options={{ animationData: boom, loop: true, autoplay: true }} />
        <h3>노랑 소리</h3>
      </div>

      <div className="card">
        <Lottie options={{ animationData: boom, loop: true, autoplay: true }} />
        <h3>초록 소리</h3>
      </div>

      <div className="card">
        <Lottie options={{ animationData: boom, loop: true, autoplay: true }} />
        <h3>파랑 소리</h3>
      </div>

      <div className="card">
        <Lottie options={{ animationData: boom, loop: true, autoplay: true }} />
        <h3>남색 소리</h3>
      </div>

      <div className="card">
        <Lottie options={{ animationData: boom, loop: true, autoplay: true }} />
        <h3>보라 소리</h3>
      </div>
    </div>
    // <Lottie
    //   options={{ animationData: boom, loop: true, autoplay: true }}
    //   height={400}
    //   width={400}
    // />
  );
}

export default App;
