const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    thumbnail: { type: String, required: true },
    channelId: { type: String, required: true },
    uploader: { type: String, required: true },
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    uploadDate: { type: Date, default: Date.now },
    comments: [
        {
            commentId: String,
            userId: String,
            text: String,
            timestamp: Date,
        }
    ]
});

const Video = mongoose.model('Video', videoSchema);
module.exports = Video;
