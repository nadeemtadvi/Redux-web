import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { updateproduct } from "../store/productReducer";
import { productList } from "../store/productList";

const Header = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cardItems);
  console.log("header", cartItems);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((res) =>
      res.json().then((data) => {
        dispatch(updateproduct(data));
      })
    );
  }, []);

  return (
    <header className="bg-neutral-900 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">
        <Link to="/">ShopyDotcom</Link>
      </h1>
      <div>
        <Link to="/cart" className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.8 9M7 13l-3-6m3 6h11.2a2 2 0 001.937-2.5L18.4 6H5.4"
            />
          </svg>
          <span className="text-sm font-semibold bg-white text-blue-500 rounded-full px-2 py-1">
            {cartItems.reduce(
              (accumulator, currentItem) => accumulator + currentItem.quantity,
              0
            )}
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
