import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
function Gallery({images}){
    return (
        <div id="gallery">
            <ImageGallery items={images} showThumbnails={false} showPlayButton={false} showFullscreenButton={false} autoPlay={true}/>
        </div>
    );
}

export default Gallery;