import React from "react";
import Cartitem from "../components/Cartitem";
import { useSelector } from "react-redux";

const Cartpage = () => {
  const cartItems = useSelector((state) => state.cardItems)
 
  return (
    <div className="cart-container max-w-7xl mx-auto p-4">
      <h2 className="text-center text-2xl font-bold my-8">
        Items in Your Cart
      </h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container font-bold p-6 bg-gray-100  border-b border-gray-300 grid grid-cols-4 gap-4">
          <div className="cart-item ">Item</div>
          <div className="item-price text-center">Price</div>
          <div className="quantity text-center">Quantity</div>
          <div className="total text-end">Total</div>
        </div>
        {cartItems.map(({ productId, title, rating, price, imageUrl, quantity }) => (
          <Cartitem
            key={productId}
            productId={productId}
            title={title}
            price={price}
            quantity={quantity}
            imageUrl={imageUrl}
            rating={rating}
          />
        ))}
        <div className="cart-header cart-item-container font-bold p-6 bg-gray-100">
          <div></div>
          <div></div>
          <div></div>
          <div className="total text-right">${cartItems.reduce(
              (accumulator, currentItem) =>
                accumulator + currentItem.quantity * currentItem.price,
              0
            )}</div>
        </div>
      </div>
    </div>
  );
};

export default Cartpage;
