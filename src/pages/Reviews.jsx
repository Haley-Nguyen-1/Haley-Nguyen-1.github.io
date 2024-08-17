import React from "react";
import ReviewText from "../components/ReviewText.jsx";
function Reviews (){

    const reviews = [
        {
            author: "John M.",
            text: "Elite Demolition and Abatement exceeded our expectations! They handled the entire process with professionalism and completed the project ahead of schedule. We couldn’t be happier with the results!"
        },
        {
            author: "Sara P.",
            text: "Elite Demolition and Abatement took down our old office building with precision and care. Their team was efficient, and they left the site clean and ready for new construction. Highly recommend!"
        },
        {
            author: "Jessica L.",
            text: "Elite Demolition and Abatement was the best choice for our commercial site teardown. They were fast, efficient, and very professional. We couldn’t have asked for a smoother experience."
        },
        {
            author: "Tom B.",
            text: "Elite Demolition and Abatement handled our residential demolition with care and precision. The team was courteous, and the job was done perfectly. I highly recommend them!"
        }
    ];

    return (
        <>
            <h1 className="center-text bold">Reviews</h1>
            <div id="review-container">
                {reviews.map( (element, index) => <ReviewText key={index} text={element.text} author={element.author} />)}
            </div>
        </>
    );
}

export default Reviews;