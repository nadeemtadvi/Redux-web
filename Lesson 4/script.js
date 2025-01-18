import { combineReducers, createStore } from "redux";
import cartReducer, {
  cartAddItem,
  cartaddItemQuantity,
  cartRemoveItem,
  cartRemoveItemQuantity,
} from "./cartReducer";
import productReducer from "./productReducer";
import wishlistReducer, {
  wishlistAddItem,
  wishlistRemoveItem,
} from "./wishlistReducer";

const reducer = combineReducers({
  products: productReducer,
  cardItems: cartReducer,
  wishLists: wishlistReducer,
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

console.log(store);

store.dispatch(cartAddItem(1));
store.dispatch(cartAddItem(2));
store.dispatch(cartAddItem(3));
store.dispatch(cartAddItem(4));
store.dispatch(cartRemoveItem(4));
store.dispatch(cartaddItemQuantity(2));
store.dispatch(cartaddItemQuantity(2));
store.dispatch(cartRemoveItemQuantity(2));
store.dispatch(cartRemoveItemQuantity(2));
store.dispatch(cartRemoveItemQuantity(2));

store.dispatch(wishlistAddItem(3));
store.dispatch(wishlistAddItem(4));
store.dispatch(wishlistRemoveItem(4));
