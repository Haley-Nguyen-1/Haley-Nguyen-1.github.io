import React from "react";

function ImageOverlay({backgroundImg, imageClass, textDetails}){
    return (
        <div className={imageClass}>
            <div className="overlay">
                <h1 className="bold">{textDetails.title}</h1>
                <h2 className="bold">{textDetails.subtitle}</h2>
                <p>{textDetails.text}</p>
            </div>
            <img src={backgroundImg}></img>
        </div>
    );
}

export default ImageOverlay;