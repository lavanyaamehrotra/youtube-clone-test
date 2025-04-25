import React from 'react';
import './VideoCard.css';

function VideoCard({ video }) {
  return (
    <div className="video-card">
      <img src={video.thumbnail} alt={video.title} />
      <h3>{video.title}</h3>
      <p>{video.channelName}</p>
      <p>{video.views} views</p>
    </div>
  );
}

export default VideoCard;

