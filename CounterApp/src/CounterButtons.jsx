import React from 'react'

export default function CounterButtons({ increment, decrement }) {
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}
