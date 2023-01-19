import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import allUsersSlice from "../features/AdminRoute/allUsersSlice";
import allProductsSlice from "../features/allProducts/allProductsSlice";
import authReducer from "../features/auth/authSlice";
import searchBarSlice from "../features/navbar/SearchBarSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    allUsers: allUsersSlice,
    allProducts: allProductsSlice,
    searchBar: searchBarSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";
export * from "../features/navbar/SearchBarSlice";
