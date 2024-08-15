import React from "react";
import {useNavigate} from 'react-router-dom';

function Navigation(){
    const navigate = useNavigate();
    return (
        <menu>
            <a className="white-text bold" onClick={() => navigate('/')}>HOME</a>
            <a className="white-text bold" onClick={() => navigate('/about-us')}>ABOUT US</a>
            <a className="white-text bold" onClick={() => navigate('/services')}>SERVICES</a>
            <a className="white-text bold" onClick={() => navigate('/contact')}>CONTACT</a>
            <a className="white-text bold" onClick={() => navigate('/reviews')}>REVIEWS/TESTIMONIALS</a>
        </menu>
    );
}

export default Navigation;