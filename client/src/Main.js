import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function Main(props) {
  const [playSound, setPlaySound] = useState("red");

  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    function removeActiveClasses() {
      cards.forEach((card) => {
        card.classList.remove("active");
        if (playSound === "red") {
          audioRefR.current.pause();
          audioRefR.current.currentTime = 0;
        } else if (playSound === "orange") {
          audioRefO.current.pause();
          audioRefO.current.currentTime = 0;
        } else if (playSound === "yellow") {
          audioRefY.current.pause();
          audioRefY.current.currentTime = 0;
        } else if (playSound === "green") {
          audioRefG.current.pause();
          audioRefG.current.currentTime = 0;
        } else if (playSound === "blue") {
          audioRefB.current.pause();
          audioRefB.current.currentTime = 0;
        } else if (playSound === "indigo") {
          audioRefI.current.pause();
          audioRefI.current.currentTime = 0;
        } else if (playSound === "purple") {
          audioRefP.current.pause();
          audioRefP.current.currentTime = 0;
        } else {
          return;
        }
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
  const audioRefR = useRef(null);
  const audioRefY = useRef(null);
  const audioRefO = useRef(null);
  const audioRefG = useRef(null);
  const audioRefB = useRef(null);
  const audioRefI = useRef(null);
  const audioRefP = useRef(null);

  const handleSetId = (id) => {
    if (id === "red") {
      setPlaySound("red");
      audioRefR.current.play();
    } else if (id === "orange") {
      setPlaySound("orange");
      audioRefO.current.play();
    } else if (id === "yellow") {
      setPlaySound("yellow");
      audioRefY.current.play();
    } else if (id === "green") {
      setPlaySound("green");
      audioRefG.current.play();
    } else if (id === "blue") {
      setPlaySound("blue");
      audioRefB.current.play();
    } else if (id === "indigo") {
      setPlaySound("indigo");
      audioRefI.current.play();
    } else if (id === "purple") {
      setPlaySound("purple");
      audioRefP.current.play();
    } else {
      return;
    }
  };

  const handlePlay = () => {
    if (playSound === "red") {
      audioRefR.current.play();
    } else if (playSound === "orange") {
      audioRefO.current.play();
    } else if (playSound === "yellow") {
      audioRefY.current.play();
    } else if (playSound === "green") {
      audioRefG.current.play();
    } else if (playSound === "blue") {
      audioRefB.current.play();
    } else if (playSound === "indigo") {
      audioRefI.current.play();
    } else if (playSound === "purple") {
      audioRefP.current.play();
    } else {
      return;
    }
  };

  const handlePause = () => {
    if (playSound === "red") {
      console.log("red");
      audioRefR.current.pause();
    } else if (playSound === "orange") {
      audioRefO.current.pause();
    } else if (playSound === "yellow") {
      audioRefY.current.pause();
    } else if (playSound === "green") {
      audioRefG.current.pause();
    } else if (playSound === "blue") {
      audioRefB.current.pause();
    } else if (playSound === "indigo") {
      audioRefI.current.pause();
    } else if (playSound === "purple") {
      audioRefP.current.pause();
    } else {
      return;
    }
    // audioRefR.current.pause();
  };

  console.log("playSound", playSound);

  return (
    <div>
      <Header handlePlay={handlePlay} handlePause={handlePause} />
      <Body
        handleSetId={handleSetId}
        audioRefR={audioRefR}
        audioRefO={audioRefO}
        audioRefY={audioRefY}
        audioRefG={audioRefG}
        audioRefB={audioRefB}
        audioRefI={audioRefI}
        audioRefP={audioRefP}
      />
      <Footer />
    </div>
  );
}

export default Main;
