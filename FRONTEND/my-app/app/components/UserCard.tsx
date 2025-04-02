interface UserProps {
    user: {
      id: string;
      name: string;
      postCount: number;
    };
  }
  
  export default function UserCard({ user }: UserProps) {
    // Generate random avatar for each user
    const avatar = `https://i.pravatar.cc/150?u=${user.id}`;
    
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-5">
          <div className="flex items-center">
            <img 
              src={avatar} 
              alt={user.name} 
              className="w-16 h-16 rounded-full mr-4 object-cover"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
              <div className="flex items-center mt-1">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  {user.postCount} posts
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  