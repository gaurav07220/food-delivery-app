import { configureStore } from "@reduxjs/toolkit";
import FoodSlice from "./FoodSlice";
import CartSlice from "./CartSlice";

export const store = configureStore({
  reducer: {
    foods: FoodSlice,
    cart: CartSlice,
  },
});
