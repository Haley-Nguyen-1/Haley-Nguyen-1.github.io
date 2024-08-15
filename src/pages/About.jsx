import React from "react";
import ImageCaption from "../components/ImageCaption.jsx";
import TextSubtextBox from "../components/TextSubtextBox.jsx";
function About (){


    const people = [
        {
            img: "https://www.shutterstock.com/shutterstock/photos/2306186897/display_1500/stock-photo-happy-middle-aged-business-man-ceo-wearing-suit-standing-in-office-using-digital-tablet-smiling-2306186897.jpg",
            style: {"width": "200px", "height" : "200px"},
            text: "Person, Title"
        },
        {
            img: "https://www.shutterstock.com/shutterstock/photos/2306186897/display_1500/stock-photo-happy-middle-aged-business-man-ceo-wearing-suit-standing-in-office-using-digital-tablet-smiling-2306186897.jpg",
            style: {"width": "200px", "height" : "200px"},
            text: "Person, Title"
        },
        {
            img: "https://www.shutterstock.com/shutterstock/photos/2306186897/display_1500/stock-photo-happy-middle-aged-business-man-ceo-wearing-suit-standing-in-office-using-digital-tablet-smiling-2306186897.jpg",
            style: {"width": "200px", "height" : "200px"},
            text: "Person, Title"
        },
        {
            img: "https://www.shutterstock.com/shutterstock/photos/2306186897/display_1500/stock-photo-happy-middle-aged-business-man-ceo-wearing-suit-standing-in-office-using-digital-tablet-smiling-2306186897.jpg",
            style: {"width": "200px", "height" : "200px"},
            text: "Person, Title"
        },
        {
            img: "https://www.shutterstock.com/shutterstock/photos/2306186897/display_1500/stock-photo-happy-middle-aged-business-man-ceo-wearing-suit-standing-in-office-using-digital-tablet-smiling-2306186897.jpg",
            style: {"width": "200px", "height" : "200px"},
            text: "Person, Title"
        },
        {
            img: "https://www.shutterstock.com/shutterstock/photos/2306186897/display_1500/stock-photo-happy-middle-aged-business-man-ceo-wearing-suit-standing-in-office-using-digital-tablet-smiling-2306186897.jpg",
            style: {"width": "200px", "height" : "200px"},
            text: "Person, Title"
        },
        {
            img: "https://www.shutterstock.com/shutterstock/photos/2306186897/display_1500/stock-photo-happy-middle-aged-business-man-ceo-wearing-suit-standing-in-office-using-digital-tablet-smiling-2306186897.jpg",
            style: {"width": "200px", "height" : "200px"},
            text: "Person, Title"
        },

    ];


    return (
        <> 
            <div className="two-grid">
                <TextSubtextBox title="title" subtext="TEXT HERE!!" hrwidth="25%"></TextSubtextBox>
                <TextSubtextBox title="title" subtext="TEXT HERE!!" hrwidth="25%"></TextSubtextBox>
            </div>
            <div id="grid-image-gallery">
                {people.map((element, index) => <ImageCaption key={index} imgSource={element.img} style={element.style} text={element.text}></ImageCaption>)}
            </div>
        </>
    );
}

export default About;