import React from 'react';
import './heroImage.css';
import heroImage from '../assets/images/hero-image.JPG';
import headerData from '../data/headerData';


const HeroImage = () => {
    const style = {
        backgroundImage: `url(${heroImage})`,
    }
    return (
        <div style={style} className="hero-image">
            <div className = "hero--image__text">
                <h1>{headerData.heroImageTitle}</h1>
                <p>{headerData.heroImageSubTitle}</p>
            </div>
        </div>
    )
}

export default HeroImage;