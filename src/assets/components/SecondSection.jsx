import React, { useState, useRef, useEffect } from 'react';
import "../css/sections.css";

const SecondSection = () => {
    return(
        <section className='services'>
            <div className="services-left">
                <h3 className='title-h3'><img src="../images/triangle.svg" alt="triangle"/>more than obvious</h3>
                <h2 className="title-h2">Digital products for your brand</h2>
                <p className="desc-1">Our team is waiting for a new challenge, so we’re ready to make a cool brand.</p>
                <a href="#" className="big-button color">
                    Get more
                </a>
            </div>
            <div className="services-right"></div>
        </section>
    )
}

export default SecondSection;