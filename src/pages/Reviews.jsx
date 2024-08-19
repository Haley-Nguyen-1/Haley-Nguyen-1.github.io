import React from "react";
import ImageTextDescription from "../components/ImageTextDescription.jsx";
function Reviews (){

    const reviews = [
        {
            author: "John M.",
            img: "https://www.shutterstock.com/shutterstock/photos/2108505611/display_1500/stock-vector-excavator-demolition-and-land-clearing-machine-vector-2108505611.jpg",
            text: "",
            description: `"Elite Demolition and Abatement exceeded our expectations! They handled the entire process with professionalism and completed the project ahead of schedule. We couldn’t be happier with the results!"`,
            className : "image-text"
        },
        {
            author: "Sarah P.",
            img: "https://www.shutterstock.com/shutterstock/photos/2108505611/display_1500/stock-vector-excavator-demolition-and-land-clearing-machine-vector-2108505611.jpg",
            text: "",
            description: `"Elite Demolition and Abatement took down our old office building with precision and care. Their team was efficient, and they left the site clean and ready for new construction. Highly recommend!"`,
            className : "image-text"
        },
        {
            author: "Linda S.",
            img: "https://www.shutterstock.com/shutterstock/photos/2108505611/display_1500/stock-vector-excavator-demolition-and-land-clearing-machine-vector-2108505611.jpg",
            text: "",
            description: `"Elite Demolition and Abatement delivered exactly what we needed. They were on time, on budget, and the quality of their work was top-notch. We’re very satisfied with the results."`,
            className : "image-text"
        },
    ]

    return (
        <>
            <div id="review-image-container">
                <div id="review-container">
                    {reviews.map((element, index) => 
                        <div className="review-item">
                            <ImageTextDescription key={index} index={index} element={element} />
                            <p style={{textAlign: "right"}}>{element.author}</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Reviews;