import { combineReducers, createStore } from "redux";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";
import wishlistReducer from "./wishlistReducer";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore(
 { reducer:{
    products: productReducer,
    cardItems: cartReducer,
    wishLists: wishlistReducer,
  }}
);

console.log(store);
