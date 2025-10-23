import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'

const Profile = () => {
  const { user, loading } = useAuth()
  const [tokenInfo, setTokenInfo] = useState(null)
  
  useEffect(() => {
    // Parse the JWT token to show expiration info
    const token = localStorage.getItem('token')
    if (token) {
      try {
        // Get the payload part of the JWT (second part)
        const payload = token.split('.')[1]
        // Decode the base64 string
        const decodedPayload = JSON.parse(atob(payload))
        // Calculate expiration time
        const expirationDate = new Date(decodedPayload.exp * 1000)
        setTokenInfo({
          issuedAt: new Date(decodedPayload.iat * 1000).toLocaleString(),
          expiresAt: expirationDate.toLocaleString(),
          timeRemaining: Math.floor((expirationDate - new Date()) / 60000) // minutes
        })
      } catch (err) {
        console.error('Error parsing token:', err)
      }
    }
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">User Profile</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">User Information</h2>
          <div className="border-t border-b py-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="font-semibold">Name:</div>
              <div className="col-span-2">{user?.name}</div>
            </div>
          </div>
          <div className="border-b py-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="font-semibold">Email:</div>
              <div className="col-span-2">{user?.email}</div>
            </div>
          </div>
          <div className="border-b py-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="font-semibold">User ID:</div>
              <div className="col-span-2">{user?.id}</div>
            </div>
          </div>
        </div>
        
        {tokenInfo && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Authentication Details</h2>
            <div className="bg-gray-50 p-4 rounded-md">
              <div className="mb-2">
                <span className="font-semibold">Token issued:</span> {tokenInfo.issuedAt}
              </div>
              <div className="mb-2">
                <span className="font-semibold">Token expires:</span> {tokenInfo.expiresAt}
              </div>
              <div>
                <span className="font-semibold">Time remaining:</span>{' '}
                <span className={tokenInfo.timeRemaining < 10 ? 'text-red-600 font-bold' : ''}>
                  {tokenInfo.timeRemaining} minutes
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile