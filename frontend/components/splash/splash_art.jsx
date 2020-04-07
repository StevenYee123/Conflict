import React from "react";

const SplashArt = () => {
    return (
      <div className="splash-bottom">
        <img src={window.triangleURL} className="splash-shape" id="triangle-1" alt="triangle.svg"/>
        <img src={window.triangleURL} className="splash-shape" id="triangle-2" alt="triangle.svg"/>
        <img src={window.triangleURL} className="splash-shape" id="triangle-3" alt="triangle.svg" />

        <img src={window.dotURL} className="splash-shape" id="dot-1" alt="dot.svg"/>
        <img src={window.dotURL} className="splash-shape" id="dot-2" alt="dot.svg"/>
        <img src={window.dotURL} className="splash-shape" id="dot-3" alt="dot.svg"/>
        <img src={window.dotURL} className="splash-shape" id="dot-4" alt="dot.svg"/>
        <img src={window.dotURL} className="splash-shape" id="dot-5" alt="dot.svg"/>

        <img src={window.circleURL} className="splash-shape" id="circle-1" alt="circle.svg"/>
        <img src={window.circleURL} className="splash-shape" id="circle-2" alt="circle.svg"/>
        <img src={window.circleURL} className="splash-shape" id="circle-3" alt="circle.svg"/>

        <img src={window.squareURL} className="splash-shape" id="square-1" alt="square.svg"/>
        <img src={window.squareURL} className="splash-shape" id="square-2" alt="square.svg"/>
        <img src={window.squareURL} className="splash-shape" id="square-3" alt="square.svg"/>

        <img src={window.crossURL} className="splash-shape" id="cross-1" alt="cross.svg"/>
        <img src={window.crossURL} className="splash-shape" id="cross-2" alt="cross.svg"/>
        <img src={window.crossURL} className="splash-shape" id="cross-3" alt="cross.svg"/>

        <img src={window.bombURL} className="splash-bomb" alt="bomb.svg" />
        <img src={window.coinURL} className="floating" id="coin-1" alt="coin.svg" />
        
      </div>
    );
}

export default SplashArt;