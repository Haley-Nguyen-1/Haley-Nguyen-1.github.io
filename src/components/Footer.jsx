import React from "react";
import './Components.css';
function Footer (){
    return (
        <footer>
            <h1 className="center-text">Elite Demolition Company</h1>
            <menu>
                <a href="/">Home</a>
                <a href="/about-us">About Us</a>
                <a href="/services">Services</a>
                <a href="/contact">Contact</a>
                <a href="/reviews">Reviews/Testimonials</a>
            </menu>
        </footer>
    );
}

export default Footer;