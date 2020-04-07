import React from "react";

const SplashArt = () => {
    return (
      <div className="splash-bottom">
        <img src={window.triangleURL} className="splash-shape" id="triangle-1" alt="triangle.svg"/>
        <img src={window.triangleURL} className="splash-shape" id="triangle-2" alt="triangle.svg"/>
        <img src={window.triangleURL} className="splash-shape" id="triangle-3" alt="triangle.svg" />
        <img src={window.dotURL} className="splash-shape" id="dot-1" alt="dot.svg"/>
        <img src={window.bombURL} className="splash-bomb" alt="bomb.svg" />
        <img src={window.coinURL} className="floating" id="coin-1" alt="coin.svg" />
        <img src={window.squareURL} className="splash-shape top-square" alt="square.svg"/>
      </div>
    );
}

export default SplashArt;