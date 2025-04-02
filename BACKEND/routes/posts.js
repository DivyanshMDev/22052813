const express = require('express');
const { getPopularPosts, getLatestPosts } = require('../services/postService');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { type = 'latest' } = req.query;
    if (type === 'popular') {
      const popularPosts = await getPopularPosts();
      res.json({ popularPosts });
    } else if (type === 'latest') {
      const latestPosts = await getLatestPosts();
      res.json({ latestPosts });
    } else {
      res.status(400).json({ error: 'Invalid type parameter' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

module.exports = router;
