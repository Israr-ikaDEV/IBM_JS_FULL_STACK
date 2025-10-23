const express = require('express');
const connectDB = require('./config/database');
const User = require('./models/user');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

connectDB();

app.use('/', userRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
