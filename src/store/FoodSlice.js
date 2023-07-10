import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  foodData: [],
  status: "normal",
};
const FoodSlice = createSlice({
  name: "foods",
  initialState,
  reducers: {
    addFoods(state, action) {
      state.foodData = action.payload;
    },
  },
});

export const { addFoods } = FoodSlice.actions;
export default FoodSlice.reducer;
