const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import user routes
const userRoutes = require('./src/routes/userRoutes');
app.use('/app/users', userRoutes);
app.use('/app/products', require('./src/routes/productRoutes'));

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the MVC Node.js Practice Application!   /app/users  /app/products');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

