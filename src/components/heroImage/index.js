import React from 'react';
import heroImage from '../../assets/images/hero-image.JPG';
import headerData from '../../data/headerData';
import NavBar from '../navbar';
import './styles.css';

const HeroImage = () => {
    const background = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${heroImage})`
    }
    return (
        <div style={background} className="hero__image">
            <NavBar />
            <div className="hero__image-text">
                <h1>{headerData.heroImageTitle}</h1>
                <p>{headerData.heroImageSubTitle}</p>
            </div>
            <div className="arrow">
                <i className="fas fa-angle-double-down"></i>
            </div>
        </div>
    )
}

export default HeroImage;