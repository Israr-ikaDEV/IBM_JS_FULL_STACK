import React from 'react'
import ProductsList from './ProductsList'
import ShoppingCart from './ShoppingCart'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <h1>Ecommerce App - REDUX</h1>
      <div className="content">
        <ProductsList />
        <ShoppingCart />
      </div>
    </div>
  )
}

export default App
