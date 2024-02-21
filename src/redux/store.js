import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "./cartSlice"
import loginSlice from "./loginSlice"
import paymentSlice from "./paymentSlice"
const store = configureStore({
    reducer:{
        cart:cartSlice,
        login:loginSlice,
        payment:paymentSlice
    }

})
export default store