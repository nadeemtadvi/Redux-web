import React from 'react'

const Cartitem = ({ title, rating, price, imageUrl, quantity }) => {
  return (
    <div className="cart-item-container p-4 border-b border-gray-300 grid grid-cols-4 gap-4">
    <div className="cart-item flex items-center">
      <img src={imageUrl} alt={title} className="w-16 h-16 object-cover" />
      <div className="ml-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{rating} ★ ★ ★ ★</p>
      </div>
    </div>
    <div className="item-price flex items-center justify-center text-lg font-medium">${price}</div>
    <div className="item-quantity flex items-center justify-center">
      <button className="px-2 py-1 border border-gray-300 rounded">-</button>
      <span className="mx-2">{quantity}</span>
      <button className="px-2 py-1 border border-gray-300 rounded">+</button>
    </div>
    <div className="item-total flex items-center justify-end text-lg font-medium">${quantity * price}</div>
  </div>
  )
}

export default Cartitem