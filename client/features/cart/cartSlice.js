import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCart = createAsyncThunk("fetchCart", async () => {
  try {
    const { data } = await axios.get(`/api/users/cart`);
    // once we get the user carts stored in the db some way, we can access it here
    return data;
  } catch (error) {
    console.log(error);
  }
});

const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const returnCart = () => state.cart;

export default cartSlice.reducer;
