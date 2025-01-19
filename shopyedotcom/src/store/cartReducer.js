const CART_ADD_ITEM = "cart/addItem";
const CART_REMOVE_ITEM = "cart/removeItem";
const CART_ADD_ITEM_QUANTITY = "cart/addItemQuantity";
const CART_REMOVE_ITEM_QUANTITY = "cart/removeItemQuantity";

export function cartAddItem(productId, quantity = 1) {
  return {
    type: CART_ADD_ITEM,
    payload: { productId, quantity },
  };
}

export function cartRemoveItem(productId) {
  return {
    type: CART_REMOVE_ITEM,
    payload: { productId },
  };
}
export function cartRemoveItemQuantity(productId) {
  return {
    type: CART_REMOVE_ITEM_QUANTITY,
    payload: { productId },
  };
}
export function cartaddItemQuantity(productId) {
  return {
    type: CART_ADD_ITEM_QUANTITY,
    payload: { productId },
  };
}

export default function cartReducer(state = [], action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      return [...state, action.payload];
    case CART_REMOVE_ITEM:
      return state.filter(
        (item) => item.productId !== action.payload.productId
      );
    case CART_ADD_ITEM_QUANTITY:
      return state.map((item) => {
        if (item.productId === action.payload.productId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

    case CART_REMOVE_ITEM_QUANTITY:
      return state
        .map((item) => {
          if (item.productId === action.payload.productId) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);

    default:
      return state;
  }
}
