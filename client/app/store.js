import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import allProductsSlice from "../features/allProducts/allProductsSlice";
import authReducer from "../features/auth/authSlice";
import SearchBarSlice from "../features/navbar/SearchBarSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    allProducts: allProductsSlice,
    searchBar: SearchBarSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";
export * from "../features/navbar/SearchBarSlice";
export * from "../features/allProducts/allProductsSlice";
