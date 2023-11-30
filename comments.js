const express = require('express');
const app = express();

// Define an array to store comments
let comments = [];

// Middleware to parse JSON request body
app.use(express.json());

// Endpoint to handle POST requests for adding comments
app.post('/comments', (req, res) => {
    const { user, comment } = req.body;
    comments.push({ user, comment });
    res.status(201).json({ message: 'Comment added successfully' });
});

// Endpoint to handle GET requests for retrieving comments
app.get('/comments', (req, res) => {
    const { user, page, limit } = req.query;
    let filteredComments = comments;

    if (user) {
        filteredComments = comments.filter(comment => comment.user === user);
    }

    // Pagination logic
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedComments = filteredComments.slice(startIndex, endIndex);

    res.json({
        total: filteredComments.length,
        page: parseInt(page),
        limit: parseInt(limit),
        comments: paginatedComments
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
