import React, { useState, useRef, useEffect } from 'react';

const FormSection = () => {
    return(
        <div className="formsection">
            <div className="form-content">
                <h2 className="title-h2">Always Be in touch</h2>
                <p className="desc-1">Subscribe if you want always to be known about all the news and available propositions.</p>
            </div>
            <form action="">
                <input type="text" placeholder='Enter your email' />
                <button className='big-button color'>Subscribe</button>
            </form>
            
        </div>
    )
}

export default FormSection;
