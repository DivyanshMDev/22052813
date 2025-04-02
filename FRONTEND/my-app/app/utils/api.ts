
import axios from 'axios';

interface User {
  id: string;
  name: string;
  postCount: number;
}

interface Post {
  id: number;
  userid: number;
  content: string;
}

const API_URL = 'http://localhost:3000'; 


const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzNjA5MDc1LCJpYXQiOjE3NDM2MDg3NzUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjUzMzc1OGM5LTA3ZDQtNDMzNC05YjUzLTg0ZTUxNzBlYTljNiIsInN1YiI6IjIyMDUyODEzQGtpaXQuYWMuaW4ifSwiZW1haWwiOiIyMjA1MjgxM0BraWl0LmFjLmluIiwibmFtZSI6ImRpdnlhbnNoIG1vZGkiLCJyb2xsTm8iOiIyMjA1MjgxMyIsImFjY2Vzc0NvZGUiOiJud3B3cloiLCJjbGllbnRJRCI6IjUzMzc1OGM5LTA3ZDQtNDMzNC05YjUzLTg0ZTUxNzBlYTljNiIsImNsaWVudFNlY3JldCI6IllzcGhlQUZDWndmdVBqWE4ifQ.qh4s0eXBLBuRt__zGCfslOur9GnoP3I_5QEUGnsVt_M' // Replace with your actual token
  }
});

export const fetchTopUsers = async (): Promise<User[]> => {
  try {
    const response = await api.get('/users');
    return response.data.topUsers;
  } catch (error) {
    console.error('Error fetching top users:', error);
    return [];
  }
};

export const fetchTrendingPosts = async (): Promise<Post[]> => {
  try {
    const response = await api.get('/posts?type=popular');
    return response.data.popularPosts;
  } catch (error) {
    console.error('Error fetching trending posts:', error);
    return [];
  }
};

export const fetchLatestPosts = async (): Promise<Post[]> => {
  try {
    const response = await api.get('/posts?type=latest');
    return response.data.latestPosts;
  } catch (error) {
    console.error('Error fetching latest posts:', error);
    return [];
  }
};

// If you need to update the token dynamically (e.g., after user login)
export const setAuthToken = (token: string) => {
  api.defaults.headers['Authorization'] = `Bearer ${token}`;
};
