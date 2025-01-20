import { createSlice } from "@reduxjs/toolkit";

const findItemIndex = (state, action) =>
  state.findIndex((item) => item.productId === action.payload.productId);
const slice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    cartAddItem(state, action) {
      const existingIndex = findItemIndex(state, action);
      if (existingIndex !== -1) state[existingIndex].quantity += 1;
      else state.push({ ...action.payload, quantity: 1 });
    },
    cartRemoveItem(state, action) {
      const existingIndex = findItemIndex(state, action);
      state.splice(existingIndex, 1);
    },
    cartaddItemQuantity(state, action) {
      const existingIndex = findItemIndex(state, action);
      state[existingIndex].quantity += 1;
    },
    cartRemoveItemQuantity(state, action) {
      const existingIndex = findItemIndex(state, action);
      state[existingIndex].quantity -= 1;
      if (state[existingIndex].quantity === 0) {
        state.splice(existingIndex, 1);
      }
    },
  },
});

export const {
  cartAddItem,
  cartRemoveItem,
  cartRemoveItemQuantity,
  cartaddItemQuantity,
} = slice.actions;
export default slice.reducer;
