import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      let count = 1
      console.log(action.payload)
      if (state.items.some((obj) => obj.id === action.payload.id)) {
        const newArray = state.items.map(obj =>
          obj.id === action.payload.id ? { ...obj, qunatity:action.payload.qunatity+count } : obj
        );
        state.items = newArray
      } else {
        const qun = {qunatity:count}
        const item = Object.assign(action.payload,qun )
        state.items.push(item);
      }
    },
    clearCart: (state, action) => {
      state.items = [];
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
