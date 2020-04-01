import React from "react";
import {Zoom} from "react-slideshow-image";

// required installation: npm install react-slideshow-image -S

import img1 from "../img/photo1.jpg"
import img2 from "../img/photo2.jpg"
import img3 from "../img/photo3.jpg"

const gal = [img1, img2, img3];

const Gallery = ()=>{
    return (
        <div className="container">
                    <div className="box">
                        <Slideshow className="box-image"/>
                    </div>
        </div>

    )
};
const zoomOutProperties = {
    duration: 4000,
    transitionDuration: 500,
    infinite: false,
    indicators: true,
    scale: 1.4,
    arrows: true
};
const Slideshow = () => {
    return (
    <Zoom {...zoomOutProperties}>
    {
        gal.map((each, index) => <img alt="slideshow" key={index} className="slides" style={{width: "100%"}} src={each} />)
    }
    </Zoom>
    )
};
export default Gallery