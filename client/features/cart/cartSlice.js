import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addToCartAsync = createAsyncThunk(
  "addToCart",
  async ({ userId, albumTitle, platform, regularPrice }) => {
    try {
      console.log("MADE TO ADD CART ASYNC");
      const { data } = await axios.post(`/addToCart/${userId}`, {
        albumTitle,
        platform,
        regularPrice,
        quantity: 1,
      });
      return data;
    } catch (error) {
      next(error);
    }
  }
);

export const removeFromCart = createAsyncThunk(
  "removeFromCart",
  async (sku) => {
    try {
      const { data } = await axios.delete(`/removeFromCart/${sku}`);
      return data;
    } catch (error) {
      next(error);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToCartAsync.fulfilled, (state, action) => {
      state.auth.me.cart.push(action.payload);
    });
  },
});

export default cartSlice.reducer;
