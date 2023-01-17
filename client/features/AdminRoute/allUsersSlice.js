import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllUsers = createAsyncThunk("allUsers", async () => {
  try {
    const { data } = await axios.get(`/api/users`);
    return data;
  } catch (error) {
    console.error(error);
  }
});

const allUsersSlice = createSlice({
  name: "allUsers",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default allUsersSlice.reducer;
