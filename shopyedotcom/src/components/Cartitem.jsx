import React from 'react'
import { useDispatch } from 'react-redux'
import { cartaddItemQuantity, cartRemoveItemQuantity } from '../store/cartReducer'

const Cartitem = ({productId, title, rating, price, imageUrl, quantity }) => {
  const dispatch = useDispatch()
  return (
    <div className="cart-item-container p-4 border-b border-gray-300 grid grid-cols-[40%_auto_auto_auto] lg:grid-cols-4 gap-4">
    <div className="cart-item lg:flex items-center">
      <img src={imageUrl} alt={title} className="w-16 h-16 object-cover" />
      <div className="mt-2 lg:mt-0 lg:ml-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{rating} ★ ★ ★ ★</p>
      </div>
    </div>
    <div className="item-price flex items-center justify-center text-lg font-medium">${price}</div>
    <div className="item-quantity flex items-center justify-center">
      <button onClick={()=> dispatch(cartRemoveItemQuantity(productId))} className="px-2 py-1 border border-gray-300 rounded">-</button>
      <span className="mx-2">{quantity}</span>
      <button onClick={()=> dispatch(cartaddItemQuantity(productId))} className="px-2 py-1 border border-gray-300 rounded">+</button>
    </div>
    <div className="item-total flex items-center justify-end text-lg font-medium">${quantity * price}</div>
  </div>
  )
}

export default Cartitem