import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoCard from '../components/VideoCard';

const Home = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            const response = await axios.get('http://localhost:5000/api/videos');
            setVideos(response.data);
        };
        fetchVideos();
    }, []);

    return (
        <div>
            <h1>Home Page</h1>
            <div className="video-grid">
                {videos.map((video) => (
                    <VideoCard key={video._id} video={video} />
                ))}
            </div>
        </div>
    );
};

export default Home;
