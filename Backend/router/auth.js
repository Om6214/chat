const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  res.status(200).json({ message: 'Logged in', sessionId: Math.random().toString(36).substr(2) });
});

module.exports = router;
