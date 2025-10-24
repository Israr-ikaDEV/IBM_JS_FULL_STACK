const express = require('express');
const connectDB = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const auth = require('./middleware/authMiddleware');  
const mongoose = require('mongoose');





const app = express();
app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);


// Example of protected route
app.get('/api/protected', auth, (req, res) => {
  res.json({ msg: 'Welcome to the protected route', userId: req.user });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});