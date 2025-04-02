const { latestPosts, popularPosts } = require('./dataService');

function getPopularPosts() {
  return popularPosts;
}

function getLatestPosts() {
  return latestPosts.slice(0, 5);
}

module.exports = { getPopularPosts, getLatestPosts };
