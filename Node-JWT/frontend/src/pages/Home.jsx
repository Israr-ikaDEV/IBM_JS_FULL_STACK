import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'

const Home = () => {
  const { isAuthenticated } = useAuth()

  return (
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">Welcome to JWT Authentication App</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-lg mb-4">
          This is a demonstration of JWT token-based authentication using React and Node.js.
        </p>
        
        {!isAuthenticated ? (
          <div className="mt-6">
            <p className="mb-4">Get started by logging in or creating a new account:</p>
            <div className="flex justify-center space-x-4">
              <Link 
                to="/login" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded"
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded"
              >
                Register
              </Link>
            </div>
          </div>
        ) : (
          <div className="mt-6">
            <p className="mb-4">You are logged in! View your profile:</p>
            <Link 
              to="/profile" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded"
            >
              Go to Profile
            </Link>
          </div>
        )}
      </div>
      
      <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h2 className="text-xl font-semibold mb-3">Features</h2>
        <ul className="text-left list-disc pl-6">
          <li>Secure user registration and login</li>
          <li>JWT token-based authentication</li>
          <li>Protected routes for authenticated users</li>
          <li>Automatic token handling in API requests</li>
          <li>Clean, responsive UI with Tailwind CSS</li>
        </ul>
      </div>
    </div>
  )
}

export default Home