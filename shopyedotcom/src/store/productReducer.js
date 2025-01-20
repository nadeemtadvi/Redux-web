import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    updateproduct(state, action) {
      return action.payload;
    },
  },
});
export const { updateproduct } = slice.actions;
export default slice.reducer;
