import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoCard from './components/VideoCard';

function App() {
  const [videos, setVideos] = useState([]);

  // Fetch videos when the component mounts
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        // Mocked video data for now
        const response = await axios.get('http://localhost:5000/api/videos');
        setVideos(response.data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };
    fetchVideos();
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="App">
      <h1>YouTube Clone</h1>
      <div className="video-grid">
        {videos.length > 0 ? (
          videos.map((video) => (
            <VideoCard key={video.videoId} video={video} />
          ))
        ) : (
          <p>Loading videos...</p>
        )}
      </div>
    </div>
  );
}

export default App;
