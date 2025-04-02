const { fetchUsers, fetchUserPosts, fetchPostComments } = require('./apiService');

let userPostCounts = {};
let postCommentCounts = {};
let latestPosts = [];
let popularPosts = [];

async function initializeData() {
  try {
    const users = await fetchUsers();
    
    for (const userId in users) {
      const posts = await fetchUserPosts(userId);
      userPostCounts[userId] = posts.length;
      
      for (const post of posts) {
        latestPosts.push(post);
        const comments = await fetchPostComments(post.id);
        postCommentCounts[post.id] = comments.length;
      }
    }
    
    latestPosts.sort((a, b) => b.id - a.id);
    updatePopularPosts();
    
    console.log('Data initialization complete');
  } catch (error) {
    console.error('Error initializing data:', error);
  }
}

function updatePopularPosts() {
  const maxComments = Math.max(...Object.values(postCommentCounts), 0);
  popularPosts = Object.keys(postCommentCounts)
    .filter(postId => postCommentCounts[postId] === maxComments)
    .map(postId => latestPosts.find(p => p.id.toString() === postId))
    .filter(post => post !== undefined);
}



module.exports = { 
  initializeData,
  userPostCounts,
  postCommentCounts,
  latestPosts,
  popularPosts
};
