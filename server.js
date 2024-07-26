// server.js

const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Example API routes
// Get all items
app.get('/api/items', (req, res) => {
    const items = [
        { id: 1, name: 'Item One' },
        { id: 2, name: 'Item Two' },
    ];
    res.json(items);
});

// Get item by ID
app.get('/api/items/:id', (req, res) => {
    const items = [
        { id: 1, name: 'Item One' },
        { id: 2, name: 'Item Two' },
    ];
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found');
    res.json(item);
});

// Add a new item
app.post('/api/items', (req, res) => {
    const newItem = {
        id: Date.now(),
        name: req.body.name
    };
    res.status(201).json(newItem);
});

// Update an item
app.put('/api/items/:id', (req, res) => {
    const items = [
        { id: 1, name: 'Item One' },
        { id: 2, name: 'Item Two' },
    ];
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found');

    item.name = req.body.name;
    res.json(item);
});

// Delete an item
app.delete('/api/items/:id', (req, res) => {
    const items = [
        { id: 1, name: 'Item One' },
        { id: 2, name: 'Item Two' },
    ];
    const index = items.findIndex(i => i.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send('Item not found');

    items.splice(index, 1);
    res.sendStatus(204);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
