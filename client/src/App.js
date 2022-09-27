import "./App.css";
import { useState, useEffect } from "react";

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
        <h3>바람 소리</h3>
      </div>
      <div className="card">
        <h3>빗 소리</h3>
      </div>
      <div className="card">
        <h3>천둥 소리</h3>
      </div>
      <div className="card">
        <h3>빗물 소리</h3>
      </div>
      <div className="card">
        <h3>바다 소리</h3>
      </div>
    </div>
  );
}

export default App;
