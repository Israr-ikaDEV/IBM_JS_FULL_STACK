const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const saltRounds = 10;

const users = [];

const requireAuth = (req, res, next) => {
  if (req.session && req.session.userId) next();
  else res.status(401).send('Unauthorized: No session');
};

// Register
router.post('/register', async (req, res) => {
  const { username, password, email } = req.body;
  if (users.find(u => u.username === username)) {
    return res.status(400).send('User already exists');
  }

  const passwordHash = await bcrypt.hash(password, saltRounds);
  const newUser = { id: users.length + 1, username, passwordHash, email };
  users.push(newUser);
  req.session.userId = newUser.id;

  res.status(201).json({ message: 'User registered successfully', user: newUser });
});

// Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) return res.status(401).send('User not found');

  const isValid = await bcrypt.compare(password, user.passwordHash);
  if (!isValid) return res.status(401).send('Invalid password');

  req.session.userId = user.id;
  res.send('Login successful');
});

// Logout
router.post('/logout', requireAuth, (req, res) => {
  req.session.destroy(err => {
    if (err) return res.status(500).send('Logout failed');
    res.clearCookie('connect.sid');
    res.send('Logout successful');
  });
});


// Protected route
router.get('/protected', requireAuth, (req, res) => {
  res.json({
    message: 'This is a protected route',
    sessionId: req.sessionID
  });
});


// Profile
router.get('/profile', requireAuth, (req, res) => {
  const user = users.find(u => u.id === req.session.userId);
  if (!user) return res.status(404).send('User not found');
  res.json({ message: 'Authenticated', user, sessionId: req.sessionID });
});

router.get('/', (req, res) => res.send('Session Auth Route Working'));

module.exports = router;
