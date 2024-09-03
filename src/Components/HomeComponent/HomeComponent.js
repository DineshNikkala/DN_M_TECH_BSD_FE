import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import "./HomeComponent.css"
import Spinner from '../Spinner/Spinner.js';

const HomeComponent = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleFileChange = async (event) => {
        const selectedFile = event.target.files[0];
        await handleFileUpload(selectedFile)
    }

    const handleFileUpload = async (selectedFile) => {

        if (!selectedFile) return;
        let file = selectedFile

        const formData = new FormData();
        formData.append('file', file);

        try {
            setLoading(true)

            const response = await axios.post('http://localhost:1515/ProcessVideo', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            setLoading(false)
            navigate('/out');
            
        } catch (error) {
            setLoading(false)
            console.error('Error uploading file:', error);
        }
    };


    return (
        <div className="container">
            <div className="center">
                <div className="title">
                    <p>Biker Safety Detection</p>
                    <div className="rollno">223J1D5814</div>
                </div>
                {loading
                    ? <Spinner />
                    : <div className="upload-button">
                        <label>
                            Try uploading a video
                            <input type="file" id="video-upload" accept="video/*" onChange={handleFileChange} />
                        </label>
                    </div>}
            </div>
        </div>
    );
};

export default HomeComponent;