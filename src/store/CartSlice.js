import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  check: false,
  reducers: {
    addItems(state, action) {
      const newItem = action.payload;
      const existingItem = state.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.push({ ...newItem, quantity: 1 });
      }
    },
    removeItems(state, action) {
      const itemId = action.payload;
      const existingItem = state.find((item) => item.id === itemId);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity--;
        } else {
          state.filter((item) => item.id !== itemId);
        }
      }
    },
    deleteItem(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    checkout(state, action) {
      state.checkout = action.payload;
    },
  },
});

export const { addItems, removeItems, deleteItem,checkout } = CartSlice.actions;
export default CartSlice.reducer;
