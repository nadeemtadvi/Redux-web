import { createStore } from "redux";
import { productList } from "./productList";

const initialState = {
  products: productList,
  cardItems: [],
  wishLists: [],
};

const CART_ADD_ITEM = "cart/addItem";
const CART_REMOVE_ITEM = "cart/removeItem";
const CART_ADD_ITEM_QUANTITY = "cart/addItemQuantity";
const CART_REMOVE_ITEM_QUANTITY = "cart/removeItemQuantity";

const WISHLIST_ADD_ITEM = "wishlist/addItem";
const WISHLIST_REMOVE_ITEM = "wishlist/removeItem";

function reducer(state = initialState, action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      return { ...state, cardItems: [...state.cardItems, action.payload] };
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cardItems: state.cardItems.filter(
          (item) => item.productId !== action.payload.productId
        ),
      };
    case CART_ADD_ITEM_QUANTITY:
      return {
        ...state,
        cardItems: state.cardItems.map((item) => {
          if (item.productId === action.payload.productId) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        }),
      };
    case CART_REMOVE_ITEM_QUANTITY:
      return {
        ...state,
        cardItems: state.cardItems
          .map((item) => {
            if (item.productId === action.payload.productId) {
              return { ...item, quantity: item.quantity - 1 };
            }
            return item;
          })
          .filter((item) => item.quantity > 0),
      };
    case WISHLIST_ADD_ITEM:
      return { ...state, wishLists: [...state.wishLists, action.payload] };
    case WISHLIST_REMOVE_ITEM:
      return {
        ...state,
        wishLists: state.wishLists.filter(
          (item) => item.productId !== action.payload.productId
        ),
      };
    default:
      return state;
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

console.log(store);

store.dispatch({
  type: CART_ADD_ITEM,
  payload: { productId: 1, quantity: 1 },
});
store.dispatch({
  type: CART_ADD_ITEM,
  payload: { productId: 2, quantity: 1 },
});
store.dispatch({
  type: CART_ADD_ITEM,
  payload: { productId: 3, quantity: 1 },
});
store.dispatch({
  type: CART_ADD_ITEM,
  payload: { productId: 4, quantity: 1 },
});
store.dispatch({
  type: CART_REMOVE_ITEM,
  payload: { productId: 4 },
});
store.dispatch({
  type: CART_ADD_ITEM_QUANTITY,
  payload: { productId: 2 },
});
store.dispatch({
  type: CART_ADD_ITEM_QUANTITY,
  payload: { productId: 2 },
});
store.dispatch({
  type: CART_REMOVE_ITEM_QUANTITY,
  payload: { productId: 2 },
});
store.dispatch({
  type: CART_REMOVE_ITEM_QUANTITY,
  payload: { productId: 2 },
});
store.dispatch({
  type: CART_REMOVE_ITEM_QUANTITY,
  payload: { productId: 2 },
});
store.dispatch({
  type: WISHLIST_ADD_ITEM,
  payload: { productId: 3 },
});
store.dispatch({
  type: WISHLIST_ADD_ITEM,
  payload: { productId: 4 },
});
store.dispatch({
  type: WISHLIST_REMOVE_ITEM,
  payload: { productId: 4 },
});
