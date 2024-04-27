import React, { useState, useRef, useEffect } from 'react';
import "../css/sections.css";

const SecondSection = () => {
    return(
        <section className='services'>
            <div className="services-left">
                <h3 className='title-h3'><img src="../images/triangle.svg" alt="triangle"/>Our Services</h3>
                <h2 className="title-h2">we develop digital products</h2>
                <p className="desc-1">You can discover all our services by clicking the link below.</p>
            </div>
            <div className="services-right"></div>
        </section>
    )
}

export default SecondSection;