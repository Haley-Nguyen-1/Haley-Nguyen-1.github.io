import React from "react";
import ImageOverlay from "../components/ImageOverlay.jsx";
import ImageTextDescription from "../components/ImageTextDescription.jsx";
function Services (){

    const info = [
        {
            backgroundImg: "https://www.shutterstock.com/shutterstock/photos/1996375745/display_1500/stock-photo-bulldozer-excavator-and-soil-compactor-on-road-work-earth-moving-heavy-equipment-and-construction-1996375745.jpg",
            imageClass : "image-overlay",
            textDetails : {title: "TITLE", subtitle: "subtitle", text: "text"}
        },
        {
            backgroundImg: "https://www.shutterstock.com/shutterstock/photos/1996375745/display_1500/stock-photo-bulldozer-excavator-and-soil-compactor-on-road-work-earth-moving-heavy-equipment-and-construction-1996375745.jpg",
            imageClass : "image-overlay",
            textDetails : {title: "TITLE", subtitle: "subtitle", text: "text"}
        },
        {
            backgroundImg: "https://www.shutterstock.com/shutterstock/photos/1996375745/display_1500/stock-photo-bulldozer-excavator-and-soil-compactor-on-road-work-earth-moving-heavy-equipment-and-construction-1996375745.jpg",
            imageClass : "image-overlay",
            textDetails : {title: "TITLE", subtitle: "subtitle", text: "text"}
        },
        {
            backgroundImg: "https://www.shutterstock.com/shutterstock/photos/1996375745/display_1500/stock-photo-bulldozer-excavator-and-soil-compactor-on-road-work-earth-moving-heavy-equipment-and-construction-1996375745.jpg",
            imageClass : "image-overlay",
            textDetails : {title: "TITLE", subtitle: "subtitle", text: "text"}
        },
        {
            backgroundImg: "https://www.shutterstock.com/shutterstock/photos/1996375745/display_1500/stock-photo-bulldozer-excavator-and-soil-compactor-on-road-work-earth-moving-heavy-equipment-and-construction-1996375745.jpg",
            imageClass : "image-overlay",
            textDetails : {title: "TITLE", subtitle: "subtitle", text: "text"}
        },
        {
            backgroundImg: "https://www.shutterstock.com/shutterstock/photos/1996375745/display_1500/stock-photo-bulldozer-excavator-and-soil-compactor-on-road-work-earth-moving-heavy-equipment-and-construction-1996375745.jpg",
            imageClass : "image-overlay",
            textDetails : {title: "TITLE", subtitle: "subtitle", text: "text"}
        },
    ];

    const serviceInfo = [
        {
            img: "https://www.shutterstock.com/shutterstock/photos/1038533161/display_1500/stock-vector-icon-of-high-rise-office-building-construction-tall-urban-architecture-concept-can-be-used-for-1038533161.jpg",
            text: "BUILDINGS",
            description: "This is a description!!!",
            className : "image-text"
        },
        {
            img: "https://www.shutterstock.com/shutterstock/photos/1038533161/display_1500/stock-vector-icon-of-high-rise-office-building-construction-tall-urban-architecture-concept-can-be-used-for-1038533161.jpg",
            text: "BUILDINGS",
            description: "This is a description!!!",
            className : "image-text"
        },
    ]


    return (
        <>
            <div id="services-images">
                {info.map( (element, index) => <ImageOverlay key={index} backgroundImg={element.backgroundImg} imageClass={element.imageClass} textDetails={element.textDetails}/> )}
            </div>
            <div>
                {serviceInfo.map ( (element, index) => 
                    <ImageTextDescription key={index} index={index} element={element} />
                )}
            </div>
        </>
    );
}

export default Services;