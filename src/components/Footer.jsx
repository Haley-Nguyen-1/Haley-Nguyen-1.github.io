import React from "react";
import Navigation from "./Navigation.jsx";
import './Components.css';
function Footer (){
    return (
        <footer>
            <h1 className="center-text white-text">COMPANY NAME</h1>
            <Navigation />
            <div>
                <p className="center-text white-text">PHONE: (555) 555 5555</p>
                <p className="center-text white-text">EMAIL: example@example.com</p>
            </div>
        </footer>
    );
}

export default Footer;