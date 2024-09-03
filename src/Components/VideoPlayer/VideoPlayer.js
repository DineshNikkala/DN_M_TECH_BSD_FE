// VideoPlayerComponent.js
import React from 'react';
import ReactPlayer from 'react-player';
import video from "../../Videos/output.mp4"

const VideoPlayerComponent = () => {
    return (
        <div className="video-player-container">
            <ReactPlayer
                url={video}
                controls
                width="100%"
                // height="400px"
                playing={true}
                loop={true}
            />
        </div>
    );
};

export default VideoPlayerComponent;
