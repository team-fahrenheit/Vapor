import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllProducts = createAsyncThunk(
	"allProducts",
	async (page = 1) => {
		try {
			const { data } = await axios.get(`/api/products/${page}`);
			return data;
		} catch (error) {
			console.log(error);
		}
	}
);

const allProductsSlice = createSlice({
	name: "allProducts",
	initialState: {},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
			return action.payload;
		});
	},
});

export const selectProducts = (state) => {
	return state.allProducts;
};

export default allProductsSlice.reducer;
