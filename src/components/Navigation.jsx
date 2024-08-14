import React from "react";
import {useNavigate} from 'react-router-dom';

function Navigation(){
    const navigate = useNavigate();
    return (
        <menu>
            <a onClick={() => navigate('/')}>Home</a>
            <a onClick={() => navigate('/about-us')}>About Us</a>
            <a onClick={() => navigate('/services')}>Services</a>
            <a onClick={() => navigate('/contact')}>Contact</a>
            <a onClick={() => navigate('/reviews')}>Reviews/Testimonials</a>
        </menu>
    );
}

export default Navigation;