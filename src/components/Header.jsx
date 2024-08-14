import React from "react";
import Navigation from "./Navigation.jsx";
import './Components.css';
function Header (){
    return (
        <header>
            <h1 className="center-text white-text">COMPANY NAME</h1>
            <Navigation />
        </header>
    );
}

export default Header;