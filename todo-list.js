const express = require('express');
const cors = require('cors'); // Add this line

const app = express();
app.use(express.json());
app.use(cors()); // Add this line

let todos = [{ id: 3, text: 'Task 3', completed: false }];

// Middleware to log requests
app.use((req, res, next) => {
    console.log(`Received ${req.method} request at ${req.url}`);
    console.log('Request body:', req.body);
    next();
});

// Middleware to log responses
app.use((req, res, next) => {
    const originalSend = res.send;
    res.send = function (body) {
        console.log('Response body:', body);
        originalSend.call(this, body);
    };
    next();
});

// Get all todos
app.get('/todos', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const paginatedTodos = todos.slice(startIndex, endIndex);

    res.json({
        total: todos.length,
        page,
        limit,
        todos: paginatedTodos
    });
});
// Get a specific todo
app.get('/todos/:id', (req, res) => {
    const id = req.params.id;
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        res.json(todo);
    } else {
        res.status(404).json({ error: 'Todo not found' });
    }
});

// Create a new todo
app.post('/todos', (req, res) => {
    const todo = req.body;
    const newTodo = {
        id: generateId(), // Generate a unique id
        text: todo.text,
        completed: false // Set completed to false by default
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

function generateId() {
    // Generate a random id using a library or custom logic
    // For simplicity, let's use a timestamp-based id
    return Date.now().toString();
}

// Update a todo
app.put('/todos/:id', (req, res) => {
    const id = req.params.id;
    const updatedTodo = req.body;
    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
        todos[index] = updatedTodo;
        res.json(updatedTodo);
    } else {
        res.status(404).json({ error: 'Todo not found' });
    }
});

// Delete a todo
app.delete('/todos/:id', (req, res) => {
    const id = req.params.id;
    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
        const deletedTodo = todos.splice(index, 1)[0];
        res.json(deletedTodo);
    } else {
        res.status(404).json({ error: 'Todo not found' });
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
