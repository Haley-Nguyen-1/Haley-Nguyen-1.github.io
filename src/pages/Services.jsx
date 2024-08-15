import React from "react";
import ImageOverly from "../components/ImageOverlay.jsx";
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


    return (
        <>
            <h1>Services</h1>
            <div id="services-images">
                {info.map( (element, index) => <ImageOverly key={index} backgroundImg={element.backgroundImg} imageClass={element.imageClass} textDetails={element.textDetails}/> )}
            </div>

        </>
    );
}

export default Services;