import { createSlice } from "@reduxjs/toolkit";
const logInSlice = createSlice({
  name: "login",
  initialState: {
    user: {},
  },
  reducers: {
    loginUser:(state,action)=>{
        console.log(action);
        state.user = action.payload;
    }
    // addItem: (state, action) => {
    //   state.items.push(action.payload);
    // },
    // clearCart: (state,action) => {
    //   state.items = [];
    // },
    // removeItem: (state, action) => {
    //     state.items.filter(item => item.id === !action.payload)
    // },
  },
});
export const { loginUser } = logInSlice.actions;
export default logInSlice.reducer;
