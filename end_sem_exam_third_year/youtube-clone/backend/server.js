const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample video data (No database)
const videos = [
  {
    videoId: 'video01',
    title: 'Learn React in 30 Minutes',
    thumbnail: 'https://via.placeholder.com/150',
    channelName: 'React Channel',
    views: 15200,
  },
  {
    videoId: 'video02',
    title: 'JavaScript Basics',
    thumbnail: 'https://via.placeholder.com/150',
    channelName: 'JS Mastery',
    views: 21200,
  },
  // Add more video data as needed
];

// API Route to get videos (Static)
app.get('/api/videos', (req, res) => {
  res.json(videos);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
