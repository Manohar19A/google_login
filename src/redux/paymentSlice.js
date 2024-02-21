import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = 
  createSlice({
    name: "payment",
    initialState: {
        data:{
            payment_capture:1,
            amount :0,
           currency :"INR"
        },
    },
   
    reducers: {
      orderList: (state, action) => {
        console.log("Payment",action);
        state.data.amount = action.payload
      },
    },
  });
export const { orderList } = paymentSlice.actions;
export default paymentSlice.reducer;
