// services/userService.js
const { fetchUsers } = require('./apiService');
const { userPostCounts } = require('./dataService');

async function getTopUsers() {
  const users = await fetchUsers();
  
  return Object.entries(userPostCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([userId, postCount]) => ({
      id: userId,
      name: users[userId],
      postCount
    }));
}

module.exports = { getTopUsers };
