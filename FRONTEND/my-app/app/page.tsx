import { fetchTopUsers } from './utils/api';
import UserCard from './components/UserCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top Users | Social Media Analytics',
  description: 'Users with the most posts',
};

export default async function TopUsers() {
  const users = await fetchTopUsers();
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Top Users</h1>
        <p className="text-gray-600">Users with the most posts</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
