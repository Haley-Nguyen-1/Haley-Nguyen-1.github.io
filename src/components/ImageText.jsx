import React from "react";
import "./Components.css"

function ImageText ({backgroundImg, className, text}) {
    return (
        <div className={className}>
            <img src={backgroundImg}></img>
            <p className="center-text bold">{text}</p>
        </div>
    );
}

export default ImageText;
