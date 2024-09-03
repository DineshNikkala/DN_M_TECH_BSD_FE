import React from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import "./OutputComponent.css";

import CarouselComponent from "../Carousel/Carousel.js";
import VideoPlayerComponent from "../VideoPlayer/VideoPlayer.js";

// Function to import all images from a folder
const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images;
};

// Importing images from the specified directory
const images = importAll(require.context('../../Images', false, /\.(jpg|jpeg|png)$/));

const OutputComponent = () => {
    console.log("Images Available", images);
    const navigate = useNavigate();

    const onHome = async () => {
        try {
            // Correctly structured axios request with headers in the config section
            const response = await axios.post('http://localhost:1515/RemoveFiles', {}, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Navigate to home after successful request
            navigate('/');
        } catch (error) {
            console.error("Error while navigating home:", error);
        }
    };

    return (
        <div className="output_container">
            <div className="header">
                <p className="output_title" onClick={onHome}> Biker Safety Detection</p>
                <div className="retry_button" onClick={onHome}>
                    <span className="try_again">Try again</span>
                </div>
            </div>

            <div className="output_body_container">
                <div className="video_box">
                    <VideoPlayerComponent className="box" />
                    <p className="sub_title">Video Output</p>
                </div>
                <div className="carousel_box">
                    {Object.keys(images).length > 0 ? (
                        <CarouselComponent images={Object.values(images)} />
                    ) : (
                        <div className="no-images">
                            <p>Images Not Found</p>
                        </div>
                    )}
                    <p className="sub_title">Carousel</p>
                </div>
            </div>
        </div>
    );
};

export default OutputComponent;
