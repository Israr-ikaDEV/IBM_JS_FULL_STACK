# 🧠 Session-Based Authentication App (Node.js + React)

A simple full-stack authentication system using **Express sessions** on the backend and a **React frontend** built with **Tailwind CSS (via CDN)**.

---

## 🚀 Features

- 🔒 User registration with hashed passwords (bcrypt)  
- 🔑 User login and session creation  
- 👤 Protected profile route (accessible only when logged in)  
- 🚪 Logout with session destroy  
- 🌐 CORS and cookies handled via Axios with `withCredentials`  
- 💅 Responsive UI using TailwindCSS (CDN version)

---

## 🧩 Tech Stack

**Backend:**
- Node.js  
- Express.js  
- express-session  
- bcrypt  
- CORS  

**Frontend:**
- React (Vite)  
- Axios  
- Tailwind CSS (via CDN)  

---

## 🛠️ Setup Instructions

### 1️⃣ Backend Setup
1. Navigate to your backend folder:
   ```bash
   cd Node-Auth
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start your backend server:
   ```bash
   node server.js
   ```
4. The backend will run at:
   ```
   http://localhost:3000
   ```

---

### 2️⃣ Frontend Setup
1. Navigate to your React frontend folder:
   ```bash
   cd session-auth-client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend server:
   ```bash
   npm run dev
   ```
4. The frontend runs at:
   ```
   http://localhost:5173
   ```

---

## 🔗 API Endpoints

| Method | Route | Description |
|--------|--------|-------------|
| `POST` | `/session-auth/register` | Register a new user |
| `POST` | `/session-auth/login` | Login with username and password |
| `POST` | `/session-auth/logout` | Logout the current session |
| `GET`  | `/session-auth/profile` | Get the logged-in user's profile |
| `GET`  | `/session-auth/protected` | (Optional) Access a protected route |

---

## ⚙️ Configuration Details

### CORS Setup
Ensure your backend `server.js` includes:
```js
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
```

### Session Setup
```js
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, httpOnly: true }
}));
```

This setup allows session cookies to be stored securely and sent between frontend and backend.

---

## 💅 Using Tailwind CSS (CDN)

The frontend uses Tailwind via CDN in `index.html`:
```html
<script src="https://cdn.tailwindcss.com"></script>
```

You can optionally extend it:
```html
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: '#2563eb',
          danger: '#dc2626',
        },
      },
    },
  };
</script>
```

---

## 🧠 How to Test Using Postman

1. **Register a user**
   - POST → `http://localhost:3000/session-auth/register`
   - Body (JSON):
     ```json
     {
       "username": "israr",
       "email": "israr@email.com",
       "password": "123456"
     }
     ```

2. **Login**
   - POST → `http://localhost:3000/session-auth/login`
   - Body (JSON):
     ```json
     {
       "username": "israr",
       "password": "123456"
     }
     ```

3. **Access Profile**
   - GET → `http://localhost:3000/session-auth/profile`
   - Must be logged in (session cookie required)

4. **Logout**
   - POST → `http://localhost:3000/session-auth/logout`

---

## 🧑‍💻 Developer Info

**Author:** Israr Khan  
**Degree:** BS Computer Science (8th Semester)  
**Goal:** Learning Full Stack JavaScript Development 🚀  
**Date:** October 21, 2025  

---

## 📸 Frontend Pages

- 🟢 **Register Page** — Create a new account  
- 🔵 **Login Page** — Authenticate user credentials  
- 🟣 **Profile Page** — Displays user info and logout button  
- 🔴 **Protected Route** — Example of session-protected access  

---

## 🧱 Next Steps

- Add a `/protected` route and dashboard page in the frontend  
- Store users in a database (e.g., MongoDB or PostgreSQL)  
- Implement persistent sessions with a session store  
- Add password reset and JWT-based token options for scalability
