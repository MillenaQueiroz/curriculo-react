import React from 'react';
import './HeroSection.css';

function HeroSection({
    bgColor,
    normalText,
    textDesc,
    initialText,
    sinitialText,
    description,
    img,
    alt,
    imgIcon
}) {
    return (
        <>
            <div className='home__hero-section'>
                
                <div className="container">
                    <div className="home-row">
                        <div className="column">
                            <div className="home-icon">
                                <img src={img} alt={alt} className="home-imgIcon" />
                            </div> 
                        </div>
                        <div className="column">
                            <div className="home-text">
                                <h1 className="heading">{initialText}</h1>
                                <h1 className="heading-alt">{sinitialText}</h1>
                                <p className="subtitle">{description}</p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

            
        </>
    )
}

export default HeroSection
