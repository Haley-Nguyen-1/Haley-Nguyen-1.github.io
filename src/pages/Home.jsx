import React from "react";
import Gallery from "../components/Gallery.jsx";
import TextSubtextBox from "../components/TextSubtextBox.jsx";
import "./Pages.css";
function Home (){
    const images = [
        {
            original: "https://www.shutterstock.com/shutterstock/photos/2477155215/display_1500/stock-photo-excavator-for-loading-scrap-metal-selective-focus-2477155215.jpg",
            thumbnail: "https://www.shutterstock.com/shutterstock/photos/2477155215/display_1500/stock-photo-excavator-for-loading-scrap-metal-selective-focus-2477155215.jpg",
            originalClass: "image"
        },
        {
            original: "https://www.shutterstock.com/shutterstock/photos/2182673391/display_1500/stock-photo-demolition-of-an-old-house-demolition-of-unnecessary-walls-with-hand-held-impact-hammer-a-view-of-2182673391.jpg",
            thumbnail : "https://www.shutterstock.com/shutterstock/photos/2182673391/display_1500/stock-photo-demolition-of-an-old-house-demolition-of-unnecessary-walls-with-hand-held-impact-hammer-a-view-of-2182673391.jpg",
            originalClass: "image"
        },
        {
            original: "https://www.shutterstock.com/shutterstock/photos/2469204197/display_1500/stock-photo-london-uk-june-large-long-armed-demolition-machine-seen-demolishing-a-tall-building-2469204197.jpg",
            thumbnail: "https://www.shutterstock.com/shutterstock/photos/2469204197/display_1500/stock-photo-london-uk-june-large-long-armed-demolition-machine-seen-demolishing-a-tall-building-2469204197.jpg",
            originalClass: "image"
        },
        {
            original :"https://www.shutterstock.com/shutterstock/photos/2103641183/display_1500/stock-photo-parquet-in-wood-glued-to-the-slab-removed-with-an-electric-demolition-hammer-by-a-craftsman-in-2103641183.jpg",
            thumbnail: "https://www.shutterstock.com/shutterstock/photos/2103641183/display_1500/stock-photo-parquet-in-wood-glued-to-the-slab-removed-with-an-electric-demolition-hammer-by-a-craftsman-in-2103641183.jpg",
            originalClass: "image"
        },
        {
            original : "https://www.shutterstock.com/shutterstock/photos/2019407615/display_1500/stock-photo-demolition-control-supervisor-and-contractor-discussing-on-demolish-building-2019407615.jpg",
            thumbnail: "https://www.shutterstock.com/shutterstock/photos/2019407615/display_1500/stock-photo-demolition-control-supervisor-and-contractor-discussing-on-demolish-building-2019407615.jpg",
            originalClass: "image"
        }
];
    return (
        <>
            <div id="image-with-text">
                <img style={{height: "100%", width: "100%"}} src="https://www.shutterstock.com/shutterstock/photos/2174794581/display_1500/stock-photo-demolition-building-excavator-destroy-old-house-2174794581.jpg"></img>
                <div>
                    <p className="bold white-text">INSERT YOUR TEXT HERE</p>
                </div>
                <div id="button-group-center">
                    <button>CLICK HERE</button>
                    <button>CLICK HERE</button>
                    <button>CLICK HERE</button>
                </div>
            </div>
            <div id="test">
                <Gallery images={images}/>
            </div>
            <TextSubtextBox title={"TITLE"} subtext={"THIS IS SUBTEXT UNDER THE TITLE"} hrwidth={"25%"} />
        </>
    );
}

export default Home;