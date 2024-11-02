import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./src/features/user/userSlice";
import cartReducer from "./src/features/cart/CartSlice";

const store = configureStore({reducer: {
    user: UserSlice,
    cart: cartReducer
}})
export default store;