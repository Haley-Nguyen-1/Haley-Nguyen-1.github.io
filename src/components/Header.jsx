import React from "react";
import Navigation from "./Navigation.jsx";
import './Components.css';
function Header (){
    return (
        <header>
            <h1 className="center-text">Elite Demolition Company</h1>
            <Navigation />
        </header>
    );
}

export default Header;