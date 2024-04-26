import React, { useState, useRef, useEffect } from 'react';
import "../css/sections.css";

const FirstSection = () => {
    return(
        <section>
            <div className="hero">
                <div className="hero-left">
                    <div className="decorate">
                        <span>digital</span>
                        <span>digital</span>
                    </div>
                    <img src="../images/hero/img-hero.png" alt="" />
                    <div className="decorate">
                        <span>products</span>
                        <span>products</span>
                    </div>
                </div>
                <div className="hero-right">
                    <div className="circle"></div>
                    <h3 className='title-h3'><img src="../images/triangle.svg" alt="triangle"/>more than obvious</h3>
                    <h2 className="title-h2">Digital products for your brand</h2>
                    <p className="desc-1">Our team is waiting for a new challenge, so we’re ready to make a cool brand.</p>
                    <a href="#" className="big-button color">
                        Get more
                    </a>
                </div>
                <img className='wave' src="../images/hero/wave.png" alt="" />
            </div>
        </section>
    )
}

export default FirstSection;