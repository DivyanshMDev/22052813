interface PostProps {
    post: {
      id: number;
      userid: number;
      content: string;
    };
    trending?: boolean;
  }
  
  export default function PostCard({ post, trending = false }: PostProps) {
    // Generate random image for each post
    const postImage = `https://picsum.photos/seed/${post.id}/600/400`;
    const avatar = `https://i.pravatar.cc/150?u=${post.userid}`;
    
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img 
          src={postImage} 
          alt={`Post ${post.id}`} 
          className="w-full h-64 object-cover"
        />
        <div className="p-5">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">{post.content}</h2>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img 
                src={avatar} 
                alt="User" 
                className="w-8 h-8 rounded-full mr-2"
              />
              <span className="text-gray-700">User {post.userid}</span>
            </div>
            {trending && (
              <div className="bg-yellow-100 text-yellow-800 text-sm font-medium px-2.5 py-0.5 rounded">
                Hot 🔥
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  