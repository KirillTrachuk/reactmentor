import React, { useState, useRef, useEffect } from 'react';

const FourthSection = () => {
    return(
        <section>
            <div className="hero hero-what">
                <div className="hero-left">
                    <div className="decorate">
                        <span>digital</span>
                        <span>digital</span>
                    </div>
                    <img src="../images/whatwedo/whatwe.png" alt="" />
                </div>
                <div className="hero-right">
                    <h3 className='title-h3'><img src="../images/triangle.svg" alt="triangle"/>what we do</h3>
                    <h2 className="title-h2">we develop digital products</h2>
                    <p className="desc-1">We appreciate every client and ready to help with all the issues that they have. Let’s figure out what we can do.</p>
                    <div className="indicators">
                        <div className="card">
                            <img src="../images/whatwedo/wedevelop1.svg" alt="" />
                            <h5 className="title-h5">Branding</h5>
                            <p className="desc-1">This is a repetition in plastic forms, lines and colors of</p>
                        </div>
                        <div className="card">
                            <img src="../images/whatwedo/wedevelop2.svg" alt="" />
                            <h5 className="title-h5">Strategy</h5>
                            <p className="desc-1">This is a repetition in plastic forms, lines and colors of</p>
                        </div>
                        <div className="card">
                            <img src="../images/whatwedo/wedevelop3.svg" alt="" />
                            <h5 className="title-h5">eCommerce</h5>
                            <p className="desc-1">This is a repetition in plastic forms, lines and colors of</p>
                        </div>
                        <div className="card">
                            <img src="../images/whatwedo/wedevelop4.svg" alt="" />
                            <h5 className="title-h5">Support</h5>
                            <p className="desc-1">This is a repetition in plastic forms, lines and colors of</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FourthSection;