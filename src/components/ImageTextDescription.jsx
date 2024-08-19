import React from "react";
import ImageText from "./ImageText";

function ImageTextDescription({index, element}){

    return (
        <div className="image-text-description">
            <span>
                <ImageText key={index} backgroundImg={element.img} className={element.className} text={element.text}/>
            </span>
            <span className="auto-width">
                <p className="center-text">{element.description}</p>
            </span>
        </div>
    );

}

export default ImageTextDescription;