const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

router.get('/comments', async (req, res) => {
  const comments = await Comment.getAll();
  res.json(comments);
});

router.post('/comments', async (req, res) => {
  const { username, comment } = req.body;
  const newComment = await Comment.add(username, comment);

  const io = req.app.get('socketio');
  io.emit('new-comment', newComment);

  res.status(201).json(newComment);
});

module.exports = router;
