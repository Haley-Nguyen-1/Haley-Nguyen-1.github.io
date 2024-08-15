import React from "react";

function ImageCaption ({imgSource, style, text}){
    return (
        <div>
            <img src={imgSource} style={style}></img>
            <p>{text}</p>
        </div>
    );
}   

export default ImageCaption;