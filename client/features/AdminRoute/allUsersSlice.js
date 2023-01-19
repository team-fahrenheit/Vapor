import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllUsers = createAsyncThunk("allUsers", async (userType) => {
  if (userType === "Admin") {
    try {
      const token = window.localStorage.getItem("token");
      const { data } = await axios.get(`/api/users`, {
        headers: {
          authorization: token,
        },
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  } else {
    console.log("Error! You are not an admin. How did you even get here?");
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
