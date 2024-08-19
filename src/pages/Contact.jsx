import React from "react";

function Contact (){

    return (
        <>
            <div id="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.208924011508!2d-95.41070739999999!3d29.684721900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c0194b406bad%3A0x1b0f6ec2399a9d57!2sNRG%20Stadium!5e0!3m2!1sen!2sus!4v1723863222698!5m2!1sen!2sus" width="600" height="450" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <h1 className="center-text bold">CONTACT US</h1>
            <div id="contact-info">
                <p className="center-text">Phone #: (555) 555 5555</p>
                <p className="center-text">Email: example@example.com</p>
                <p className="center-text">Socials</p>
                <div className="center">
                    <button>???</button>
                    <button>???</button>
                    <button>???</button>
                </div>
            </div>
        </>
    );
}

export default Contact;