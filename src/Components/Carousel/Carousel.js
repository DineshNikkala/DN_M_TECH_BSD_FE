import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';

// Dynamically import all images from the specified directory
// const importAll = (r) => {
//     let images = {};
//     r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
//     return images;
// };

// Import images dynamically
// const images = importAll(require.context('../../Images', false, /\.(jpg|jpeg|png)$/));

const CarouselComponent = ({ images }) => {
    const imageArray = Object.values(images);

    console.log("Hi")
    return (
        <div className="carousel-wrapper">
            {imageArray.length > 0 ? (
                <Carousel
                    showThumbs={false}
                    infiniteLoop
                    autoPlay
                    interval={3000}
                    showStatus={false}
                    showIndicators={true}
                    className="carousel-container"
                >
                    {imageArray.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Slide ${index}`} />
                        </div>
                    ))}
                </Carousel>
            ) : (
                <div className="no-images-message">No images found</div>
            )}
        </div>
    );
};

export default CarouselComponent;
