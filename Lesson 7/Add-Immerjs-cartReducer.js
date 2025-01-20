import { produce } from "immer";

const CART_ADD_ITEM = "cart/addItem";
const CART_REMOVE_ITEM = "cart/removeItem";
const CART_ADD_ITEM_QUANTITY = "cart/addItemQuantity";
const CART_REMOVE_ITEM_QUANTITY = "cart/removeItemQuantity";

export function cartAddItem(productData) {
  return {
    type: CART_ADD_ITEM,
    payload: productData,
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

export default function cartReducer(originalState = [], action) {
  return produce(originalState, (state) => {
    const existingIndex = state.findIndex(
      (item) => item.productId === action.payload.productId
    );
    switch (action.type) {
      case CART_ADD_ITEM:
        if (existingIndex !== -1) {
          state[existingIndex].quantity += 1;
          break;
        }
        state.push({ ...action.payload, quantity: 1 });
        break;
      case CART_REMOVE_ITEM:
        state.splice(existingIndex, 1);
        break;
      case CART_ADD_ITEM_QUANTITY:
        state[existingIndex].quantity += 1;
        break;

      case CART_REMOVE_ITEM_QUANTITY:
        state[existingIndex].quantity -= 1;
        if (state[existingIndex].quantity === 0) {
          state.splice(existingIndex, 1);
        }
    }
  });
}
