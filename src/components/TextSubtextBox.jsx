import React from "react";

function TextSubtextBox ({title, subtext, hrwidth}) {
    return (
        <div>
            <h1 className="center-text">{title}</h1>
            <hr style={{"width": hrwidth} }></hr>
            <p className="center-text">{subtext}</p>
        </div>
    );
}

export default TextSubtextBox;