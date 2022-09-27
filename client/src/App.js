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
    // <div className="container">
    //   <div className="card active">
    //     <h3>바람 소리</h3>
    //   </div>
    //   <div className="card">
    //     <h3>빗 소리</h3>
    //   </div>
    //   <div className="card">
    //     <h3>천둥 소리</h3>
    //   </div>
    //   <div className="card">
    //     <h3>빗물 소리</h3>
    //   </div>
    //   <div className="card">
    //     <h3>바다 소리</h3>
    //   </div>
    // </div>
    <Lottie
      options={{ animationData: boom, loop: true, autoplay: true }}
      height={400}
      width={400}
    />
  );
}

export default App;
