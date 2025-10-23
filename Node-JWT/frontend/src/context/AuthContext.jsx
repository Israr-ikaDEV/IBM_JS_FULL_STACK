import React from 'react'
import { createContext, useState, useContext, useEffect } from 'react'
import axios from 'axios'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [isAuthenticated, setIsAuthenticated] = useState(!!token)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Configure axios defaults
  axios.defaults.baseURL = 'http://localhost:5000/api'
  
  // Set auth token for all requests if available
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['x-auth-token'] = token
    } else {
      delete axios.defaults.headers.common['x-auth-token']
    }
  }, [token])

  // Load user data if token exists
  useEffect(() => {
    const loadUser = async () => {
      if (!token) {
        setUser(null)
        setIsAuthenticated(false)
        return
      }

      try {
        setLoading(true)
        const res = await axios.get('/user/profile')
        setUser(res.data)
        setIsAuthenticated(true)
      } catch (err) {
        console.error('Error loading user:', err.response?.data || err.message)
        localStorage.removeItem('token')
        setToken(null)
        setUser(null)
        setIsAuthenticated(false)
      } finally {
        setLoading(false)
      }
    }

    loadUser()
  }, [token])

  // Register user
  const register = async (userData) => {
    try {
      setLoading(true)
      setError(null)
      const res = await axios.post('/auth/register', userData)
      
      const { token: newToken, user: newUser } = res.data
      
      localStorage.setItem('token', newToken)
      setToken(newToken)
      setUser(newUser)
      setIsAuthenticated(true)
      
      return { success: true }
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed')
      return { success: false, error: err.response?.data?.message || 'Registration failed' }
    } finally {
      setLoading(false)
    }
  }

  // Login user
  const login = async (credentials) => {
    try {
      setLoading(true)
      setError(null)
      const res = await axios.post('/auth/login', credentials)
      
      const { token: newToken, user: newUser } = res.data
      
      localStorage.setItem('token', newToken)
      setToken(newToken)
      setUser(newUser)
      setIsAuthenticated(true)
      
      return { success: true }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed')
      return { success: false, error: err.response?.data?.message || 'Login failed' }
    } finally {
      setLoading(false)
    }
  }

  // Logout user
  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
    setUser(null)
    setIsAuthenticated(false)
    setError(null)
  }

  const value = {
    user,
    token,
    isAuthenticated,
    loading,
    error,
    register,
    login,
    logout
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}