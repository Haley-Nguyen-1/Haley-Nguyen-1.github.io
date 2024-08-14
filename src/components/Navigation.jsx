import React from "react";
import {useNavigate} from 'react-router-dom';

function Navigation(){
    const navigate = useNavigate();
    return (
        <menu>
            <a className="white-text" onClick={() => navigate('/')}>Home</a>
            <a className="white-text" onClick={() => navigate('/about-us')}>About Us</a>
            <a className="white-text" onClick={() => navigate('/services')}>Services</a>
            <a className="white-text" onClick={() => navigate('/contact')}>Contact</a>
            <a className="white-text" onClick={() => navigate('/reviews')}>Reviews/Testimonials</a>
        </menu>
    );
}

export default Navigation;