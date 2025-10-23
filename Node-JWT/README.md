# JWT Authentication App

A full-stack authentication application using JWT token-based authorization instead of sessions.

## Features

- User registration and login
- JWT token-based authentication
- Protected routes requiring authentication
- Secure password hashing with bcrypt
- React frontend with Tailwind CSS
- Token expiration handling
- In-memory user storage (easily adaptable to a database)

## Project Structure

```
Node-JWT/
├── backend/
│   ├── middleware/
│   │   └── auth.js         # JWT verification middleware
│   ├── models/
│   │   └── User.js         # User model (in-memory)
│   ├── routes/
│   │   ├── auth.js         # Authentication routes
│   │   └── user.js         # User routes
│   ├── .env                # Environment variables
│   ├── package.json        # Backend dependencies
│   └── server.js           # Express server setup
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   └── Navbar.jsx  # Navigation component
    │   ├── context/
    │   │   └── AuthContext.jsx # Authentication context
    │   ├── pages/
    │   │   ├── Home.jsx    # Home page
    │   │   ├── Login.jsx   # Login page
    │   │   ├── Profile.jsx # Protected profile page
    │   │   └── Register.jsx # Registration page
    │   ├── App.jsx         # Main app with routes
    │   └── main.jsx        # Entry point
    ├── index.html          # HTML template with Tailwind CDN
    └── package.json        # Frontend dependencies
```

## Setup Instructions

### Backend Setup

1. Navigate to the project root directory:
   ```
   cd Node-JWT
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:
   ```
   JWT_SECRET=your_jwt_secret_key_here
   PORT=5000
   ```

4. Start the backend server:
   ```
   npm run dev
   ```
   The server will run on http://localhost:5000

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```
   The frontend will run on http://localhost:5173

## API Endpoints

### Authentication Routes

- **POST /api/auth/register**
  - Register a new user
  - Request body: `{ name, email, password }`
  - Response: `{ token, user: { id, name, email } }`

- **POST /api/auth/login**
  - Login an existing user
  - Request body: `{ email, password }`
  - Response: `{ token, user: { id, name, email } }`

### User Routes

- **GET /api/user/profile**
  - Get the current user's profile
  - Headers: `x-auth-token: <jwt_token>`
  - Response: `{ id, name, email }`

## Testing with Postman

1. **Register a User**
   - Method: POST
   - URL: http://localhost:5000/api/auth/register
   - Body (JSON):
     ```json
     {
       "name": "Test User",
       "email": "test@example.com",
       "password": "password123"
     }
     ```
   - Save the returned token

2. **Login**
   - Method: POST
   - URL: http://localhost:5000/api/auth/login
   - Body (JSON):
     ```json
     {
       "email": "test@example.com",
       "password": "password123"
     }
     ```
   - Save the returned token

3. **Access Protected Route**
   - Method: GET
   - URL: http://localhost:5000/api/user/profile
   - Headers:
     ```
     x-auth-token: <your_jwt_token>
     ```

## Security Considerations

- JWT tokens are stored in localStorage (consider using HTTP-only cookies for production)
- Passwords are hashed using bcrypt before storage
- JWT tokens expire after 1 hour
- Protected routes verify token validity

## Future Improvements

- Add database integration (MongoDB, PostgreSQL)
- Implement refresh tokens
- Add email verification
- Add password reset functionality
- Add user roles and permissions
- Add more robust error handling
- Add unit and integration tests

## License

MIT