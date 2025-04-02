// app/feed/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { fetchLatestPosts } from '../utils/api';
import PostCard from '../components/PostCard';
import LoadingSpinner from '../components/LoadingSpinner';

interface Post {
  id: number;
  userid: number;
  content: string;
}

export default function Feed() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      const data = await fetchLatestPosts();
      setPosts(data);
      setLoading(false);
    };
    
    getPosts();
    
    // Set up polling for real-time updates
    const interval = setInterval(getPosts, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Latest Posts</h1>
        <p className="text-gray-600">Real-time feed of the newest posts</p>
      </div>
      
      {loading && posts.length === 0 ? (
        <LoadingSpinner />
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
