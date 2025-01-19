import React from "react";
import Cartitem from "../components/Cartitem";

const Cartpage = () => {
  const cartItems = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      quantity: 1,
      rating: 3.9,
      price: 109.95,
    },
    {
      id: 2,
      title: "Mens Cotton Jacket",
      imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      quantity: 1,
      rating: 4.7,
      price: 55.99,
    },
    {
      id: 3,
      title: "Mens Casual Slim Fit",
      imageUrl: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      quantity: 1,
      rating: 2.1,
      price: 15.99,
    },
  ];
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
        {cartItems.map(({ id, title, rating, price, imageUrl, quantity }) => (
          <Cartitem
            key={id}
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
          <div className="total text-right">$500</div>
        </div>
      </div>
    </div>
  );
};

export default Cartpage;
