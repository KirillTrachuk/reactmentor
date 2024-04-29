import React, { useState, useRef, useEffect } from 'react';

const SecondSection = () => {
    return(
        <section>
            <div className='services'>
                <div className="services-left">
                    <h3 className='title-h3'><img src="../images/triangle.svg" alt="triangle"/>Our Services</h3>
                    <h2 className="title-h2">we develop digital products</h2>
                    <p className="desc-1">You can discover all our services by clicking the link below.</p>
                    <a className='desc-1' href="#">view all<svg viewBox="0 0 31 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.8" d="M30.5303 6.53033C30.8232 6.23744 30.8232 5.76256 30.5303 5.46967L25.7574 0.696699C25.4645 0.403806 24.9896 0.403806 24.6967 0.696699C24.4038 0.989593 24.4038 1.46447 24.6967 1.75736L28.9393 6L24.6967 10.2426C24.4038 10.5355 24.4038 11.0104 24.6967 11.3033C24.9896 11.5962 25.4645 11.5962 25.7574 11.3033L30.5303 6.53033ZM0 6.75H30V5.25H0V6.75Z" fill="white"/></svg></a>
                </div>
                <div className="services-right">
                    <div className="card">
                        <img src="./images/services/ourservices1.svg" alt="img" />
                        <h5 className="title-h5">
                            Web Development
                        </h5>
                        <p className="desc-1">Our developers are carefully considering how your product should work while mainta...</p>
                        <svg viewBox="0 0 31 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.8" d="M30.5303 6.53033C30.8232 6.23744 30.8232 5.76256 30.5303 5.46967L25.7574 0.696699C25.4645 0.403806 24.9896 0.403806 24.6967 0.696699C24.4038 0.989593 24.4038 1.46447 24.6967 1.75736L28.9393 6L24.6967 10.2426C24.4038 10.5355 24.4038 11.0104 24.6967 11.3033C24.9896 11.5962 25.4645 11.5962 25.7574 11.3033L30.5303 6.53033ZM0 6.75H30V5.25H0V6.75Z" fill="#57585D"/></svg>
                    </div>
                    <div className="card">
                        <img src="./images/services/ourservices2.svg" alt="img" />
                        <h5 className="title-h5">
                            SEO optimization
                        </h5>
                        <p className="desc-1">Promotion of your product is an important step in making money and constant popula...</p>
                        <svg viewBox="0 0 31 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.8" d="M30.5303 6.53033C30.8232 6.23744 30.8232 5.76256 30.5303 5.46967L25.7574 0.696699C25.4645 0.403806 24.9896 0.403806 24.6967 0.696699C24.4038 0.989593 24.4038 1.46447 24.6967 1.75736L28.9393 6L24.6967 10.2426C24.4038 10.5355 24.4038 11.0104 24.6967 11.3033C24.9896 11.5962 25.4645 11.5962 25.7574 11.3033L30.5303 6.53033ZM0 6.75H30V5.25H0V6.75Z" fill="#57585D"/></svg>
                    </div>
                    <div className="card">
                        <img src="./images/services/ourservices3.svg" alt="img" />
                        <h5 className="title-h5">
                            Ui/UX Design
                        </h5>
                        <p className="desc-1">Everything starts with the beautiful. And professional design is of great importa...</p>
                        <svg viewBox="0 0 31 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.8" d="M30.5303 6.53033C30.8232 6.23744 30.8232 5.76256 30.5303 5.46967L25.7574 0.696699C25.4645 0.403806 24.9896 0.403806 24.6967 0.696699C24.4038 0.989593 24.4038 1.46447 24.6967 1.75736L28.9393 6L24.6967 10.2426C24.4038 10.5355 24.4038 11.0104 24.6967 11.3033C24.9896 11.5962 25.4645 11.5962 25.7574 11.3033L30.5303 6.53033ZM0 6.75H30V5.25H0V6.75Z" fill="#57585D"/></svg>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SecondSection;