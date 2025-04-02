
const axios = require('axios');
const NodeCache = require('node-cache');

const BASE_URL = 'http://20.244.56.144/evaluation-service';
const cache = new NodeCache({ stdTTL: 60 });


const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzNjA1NDIwLCJpYXQiOjE3NDM2MDUxMjAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjUzMzc1OGM5LTA3ZDQtNDMzNC05YjUzLTg0ZTUxNzBlYTljNiIsInN1YiI6IjIyMDUyODEzQGtpaXQuYWMuaW4ifSwiZW1haWwiOiIyMjA1MjgxM0BraWl0LmFjLmluIiwibmFtZSI6ImRpdnlhbnNoIG1vZGkiLCJyb2xsTm8iOiIyMjA1MjgxMyIsImFjY2Vzc0NvZGUiOiJud3B3cloiLCJjbGllbnRJRCI6IjUzMzc1OGM5LTA3ZDQtNDMzNC05YjUzLTg0ZTUxNzBlYTljNiIsImNsaWVudFNlY3JldCI6IllzcGhlQUZDWndmdVBqWE4ifQ.B5i64MVfpAy7Fu8HOWpMme74SN6jhsEE5XeaK6jxoAg'; // Replace with your actual token

async function fetchUsers() {
  const cachedUsers = cache.get('users');
  if (cachedUsers) return cachedUsers;
  
  const response = await axios.get(`${BASE_URL}/users`, {
    headers: {
      'Authorization': `Bearer ${AUTH_TOKEN}`
    }
  });
  
  const users = response.data.users;
  
  cache.set('users', users);
  return users;
}

async function fetchUserPosts(userId) {
  const cacheKey = `posts_${userId}`;
  const cachedPosts = cache.get(cacheKey);
  if (cachedPosts) return cachedPosts;
  
  const response = await axios.get(`${BASE_URL}/users/${userId}/posts`, {
    headers: {
      'Authorization': `Bearer ${AUTH_TOKEN}`
    }
  });
  
  const posts = response.data.posts;
  
  cache.set(cacheKey, posts);
  return posts;
}

async function fetchPostComments(postId) {
  const cacheKey = `comments_${postId}`;
  const cachedComments = cache.get(cacheKey);
  if (cachedComments) return cachedComments;
  
  const response = await axios.get(`${BASE_URL}/posts/${postId}/comments`, {
    headers: {
      'Authorization': `Bearer ${AUTH_TOKEN}`
    }
  });
  
  const comments = response.data.comments;
  
  cache.set(cacheKey, comments);
  return comments;
}

module.exports = { fetchUsers, fetchUserPosts, fetchPostComments };
