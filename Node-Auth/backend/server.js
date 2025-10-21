const express = require('express');
const cors = require('cors');
const session = require('express-session');
const sessionAuth = require('./routes/sessionAuth');

const app = express();

// 1. Enable CORS
app.use(cors({
    origin: 'http://localhost:5173', // or your frontend URL
    credentials: true // allow cookies to be sent
}));

// 2. Parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3. Configure session middleware
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,  // true only if using HTTPS
        httpOnly: true, // prevent JS access to cookies
        maxAge: 1000 * 60 * 60 // 1 hour session
    }
}));

// 4. Mount routes
app.use('/session-auth', sessionAuth);

// 5. Start server
app.listen(3000, () => {
    console.log('✅ Server is running on http://localhost:3000');
});
