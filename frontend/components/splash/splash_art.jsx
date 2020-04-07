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
        {/* X's on the page */}
        <img src={window.crossURL} className="splash-shape" id="cross-1" alt="cross.svg"/>
        <img src={window.crossURL} className="splash-shape" id="cross-2" alt="cross.svg"/>
        <img src={window.crossURL} className="splash-shape" id="cross-3" alt="cross.svg"/>

        {/* Floating Images */}
        <img src={window.bombURL} className="splash-bomb floating" alt="bomb.svg" />
        <img src={window.coinURL} className="splash-coin floating" id="coin-1" alt="coin.svg" />
        <img src={window.coinURL} className="splash-coin floating" id="coin-2" alt="coin.svg" />
        <img src={window.cartridgeURL} className="splash-cartridge floating" alt="cartridge.svg"/>

        <img src={window.potionURL} className="splash-potion" alt="potion.svg" />
        <img src={window.shieldURL} className="splash-shield" alt="shield.svg" />
        <img src={window.blockURL}  className="splash-block" alt="block.svg"/>
        <img src={window.monitorURL} className="splash-monitor" alt="monitor.svg"/>
        <img src={window.androidURL} className="splash-android" alt="android.svg"/>
        <img src={window.iphoneURL} className="splash-iphone" alt="iphone.svg"/>
        <img src={window.controllerURL} className="splash-controller" alt="controller.svg"/>
        <img src={window.laptopURL} className="splash-laptop" alt="laptop.svg"/>
        <img src={window.headphonesURL} className="splash-headphones" alt="headphones.svg"/>
      </div>
    );
}

export default SplashArt;