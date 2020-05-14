import React from 'react';

const Carousel = (props) => {
    return (
        <div id="demo" className="carousel slide" data-ride="carousel">
            
            {/* Indicators */}
            <ul className="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" className="active" />
                <li data-target="#demo" data-slide-to="1" />
                <li data-target="#demo" data-slide-to="2" />
            </ul>

            {/* The slideshow */}
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className='img-fluid' src={props.img1} alt="Digital Marketing" />
                </div>
                <div className="carousel-item">
                    <img className='img-fluid' src={props.img2} alt="Social Media Marketing" />
                </div>
                <div className="carousel-item">
                    <img className='img-fluid' src={props.img3} alt="Web Design and Development" />
                </div>
            </div>

            {/* Left and right controls */}
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
                <span className="carousel-control-next-icon"></span>
            </a>

        </div>

    );
};

export default Carousel;