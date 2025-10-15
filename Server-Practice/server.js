const express = require('express');
const app = express();

// Middleware to parse JSON body
app.use(express.json());

// ✅ Static user list
let users = [
  { id: 1, name: 'Israr', email: 'israr@example.com' },
  { id: 2, name: 'Abdulhanan', email: 'abdulhanan@example.com' },
  { id: 3, name: 'Ayesha', email: 'ayesha@example.com' }
];

// ✅ Root route
app.get('/', (req, res) => {
  res.send('Welcome to the User API 🚀');
});

// ✅ Get all users
app.get('/users', (req, res) => {
  res.json(users);
});

// ✅ Get user by ID
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) {
    return res.status(404).send('User not found!');
  }
  res.json(user);
});

// ✅ Create (POST) a new user
app.post('/users', (req, res) => {
  const { id, name, email } = req.body;

  // Check required fields
  if (!id || !name || !email) {
    return res.status(400).send('All fields (id, name, email) are required!');
  }

  // Check if user already exists
  const existingUser = users.find(u => u.id == id);
  if (existingUser) {
    return res.status(400).send('User with this ID already exists!');
  }

  // Add new user
  const newUser = { id, name, email };
  users.push(newUser);

  console.log('✅ New user added:', newUser);
  res.status(201).send(`User ${name} added successfully!`);
});

// ✅ Update (PUT) an existing user
app.put('/users/:id', (req, res) => {
  const { name, email } = req.body;
  const user = users.find(u => u.id == req.params.id);

  if (!user) return res.status(404).send('User not found!');
  if (!name && !email)
    return res.status(400).send('Provide at least one field (name or email) to update.');

  // Update user data
  if (name) user.name = name;
  if (email) user.email = email;

  console.log('✏️ User updated:', user);
  res.send(`User with ID ${req.params.id} updated successfully!`);
});
// ✅ Start the server
app.listen(4000, () => {
  console.log('✅ Server running at http://localhost:4000');
});
