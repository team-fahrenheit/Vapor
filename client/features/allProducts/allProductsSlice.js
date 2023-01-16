import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllProducts = createAsyncThunk(
  "allProducts",
  async ({ search, page }) => {
    try {
      const { data } = await axios.get(`/api/products/${page}/${search}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const allProductsSlice = createSlice({
  name: "allProducts",
  initialState: {},
  reducers: {
    updatePage(state, action) {
      state.currentPage = action.payload;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { updatePage } = allProductsSlice.actions;

export const selectProducts = (state) => {
  return state.allProducts;
};

export default allProductsSlice.reducer;
