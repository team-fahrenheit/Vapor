import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import allProductsSlice from '../features/allProducts/allProductsSlice';
import authReducer from '../features/auth/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    allProducts: allProductsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/auth/authSlice';
