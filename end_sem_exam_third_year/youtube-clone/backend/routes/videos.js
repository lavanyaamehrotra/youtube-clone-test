const express = require('express');
const Video = require('../models/Video');
const router = express.Router();

router.get('/', async (req, res) => {
    const videos = await Video.find();
    res.json(videos);
});

router.get('/:id', async (req, res) => {
    const video = await Video.findById(req.params.id);
    res.json(video);
});

router.post('/:id/comments', async (req, res) => {
    const video = await Video.findById(req.params.id);
    video.comments.push(req.body);
    await video.save();
    res.status(201).send('Comment added');
});

module.exports = router;
