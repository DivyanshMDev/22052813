import { fetchTrendingPosts } from '../utils/api';
import PostCard from '../components/PostCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trending Posts | Social Media Analytics',
  description: 'Posts with the most comments',
};

export default async function TrendingPosts() {
  const posts = await fetchTrendingPosts();
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Trending Posts</h1>
        <p className="text-gray-600">Posts with the most comments</p>
      </div>
      
      <div className="space-y-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} trending={true} />
        ))}
      </div>
    </div>
  );
}
