
const express = require('express');
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/posts');
const { initializeData } = require('./services/dataService');

const app = express();
const port = process.env.PORT || 3000;

app.use('/users', userRoutes);
app.use('/posts', postRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  initializeData();
});
