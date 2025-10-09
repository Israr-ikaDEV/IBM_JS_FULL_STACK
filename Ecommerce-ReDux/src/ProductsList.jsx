import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from './store/CartSlice.jsx'

export default function ProductsList() {
  const dispatch = useDispatch()

  const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
    { id: 4, name: 'Product 4', price: 400 },
    { id: 5, name: 'Product 5', price: 500 },
  ]

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  return (
    <div className="product-container">
      <h2 className="section-title">🛍️ Products List</h2>
      <ul className="product-list">
        {products.map(product => (
          <li key={product.id} className="product-item">
            <div className="product-info">
              <span className="product-name">{product.name}</span>
              <span className="product-price">${product.price}</span>
            </div>
            <button
              onClick={() => handleAddToCart(product)}
              className="add-btn"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
