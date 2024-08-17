import React from "react";

function ReviewText ({text, author}){
    return (
        <div className="review-text">
            <p>"{text}"</p>
            <p>{author}</p>
        </div>
    );
}

export default ReviewText;