import Lottie from "lottie-react-web";
import "../App.css";

import red from "../animation/red.json";
import orange from "../animation/orange.json";
import yellow from "../animation/yellow.json";
import green from "../animation/green.json";
import blue from "../animation/blue.json";
import indigo from "../animation/indigo.json";
import purple from "../animation/purple.json";

import redSound from "../mp3/red.mp3";
import orangeSound from "../mp3/orange.mp3";
import yellowSound from "../mp3/yellow.mp3";
import greenSound from "../mp3/green.mp3";
import blueSound from "../mp3/blue.mp3";
import indigoSound from "../mp3/indigo.mp3";
import purpleSound from "../mp3/purple.mp3";

function Body({
  handleSetId,
  audioRefB,
  audioRefG,
  audioRefI,
  audioRefO,
  audioRefP,
  audioRefR,
  audioRefY,
}) {
  return (
    <div className="container">
      <div className="card active" onClick={() => handleSetId("red")}>
        <div className="card__inner">
          <Lottie
            options={{ animationData: red, loop: true, autoplay: true }}
          />
          <audio
            src={redSound}
            // autoPlay="autoPlay"
            type="audio/mp3"
            loop="loop"
            ref={audioRefR}
          />
        </div>
      </div>
      <div className="card" onClick={() => handleSetId("orange")}>
        <div className="card__inner">
          <Lottie
            options={{ animationData: orange, loop: true, autoplay: true }}
          />
          <audio
            src={orangeSound}
            // autoPlay="autoPlay"
            type="audio/mp3"
            loop="loop"
            ref={audioRefO}
          />
        </div>
      </div>

      <div className="card" onClick={() => handleSetId("yellow")}>
        <div className="card__inner">
          <Lottie
            options={{ animationData: yellow, loop: true, autoplay: true }}
          />
          <audio
            src={yellowSound}
            // autoPlay="autoPlay"
            type="audio/mp3"
            loop="loop"
            ref={audioRefY}
          />
        </div>
      </div>

      <div className="card" onClick={() => handleSetId("green")}>
        <div className="card__inner">
          <Lottie
            options={{ animationData: green, loop: true, autoplay: true }}
          />
          <audio
            src={greenSound}
            // autoPlay="autoPlay"
            type="audio/mp3"
            ref={audioRefG}
            loop="loop"
          />
        </div>
      </div>

      <div className="card" onClick={() => handleSetId("blue")}>
        <div className="card__inner">
          <Lottie
            options={{ animationData: blue, loop: true, autoplay: true }}
          />
          <audio
            src={blueSound}
            // autoPlay="autoPlay"
            type="audio/mp3"
            loop="loop"
            ref={audioRefB}
          />
        </div>
      </div>

      <div className="card" onClick={() => handleSetId("indigo")}>
        <div className="card__inner">
          <Lottie
            options={{ animationData: indigo, loop: true, autoplay: true }}
          />
          <audio
            src={indigoSound}
            // autoPlay="autoPlay"
            type="audio/mp3"
            loop="loop"
            ref={audioRefI}
          />
        </div>
      </div>

      <div className="card" onClick={() => handleSetId("purple")}>
        <div className="card__inner">
          <Lottie
            options={{ animationData: purple, loop: true, autoplay: true }}
          />
          <audio
            src={purpleSound}
            // autoPlay="autoPlay"
            type="audio/mp3"
            loop="loop"
            ref={audioRefP}
          />
        </div>
      </div>
    </div>
  );
}

export default Body;
