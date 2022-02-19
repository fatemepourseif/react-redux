import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";
import uiSlice from "./uiSlice";

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});

export default store;
