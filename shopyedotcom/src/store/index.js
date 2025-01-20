import { combineReducers, createStore } from "redux";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";
import wishlistReducer from "./wishlistReducer";

const reducer = combineReducers({
  products: productReducer,
  cardItems: cartReducer,
  wishLists: wishlistReducer,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
);

console.log(store);
