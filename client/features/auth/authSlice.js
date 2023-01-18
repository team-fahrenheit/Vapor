import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/*
  CONSTANT VARIABLES
*/
const TOKEN = "token";

/*
  THUNKS
*/
export const me = createAsyncThunk("auth/me", async () => {
  const token = window.localStorage.getItem(TOKEN);
  try {
    if (token) {
      const res = await axios.get("/auth/me", {
        headers: {
          authorization: token,
        },
      });
      return res.data;
    } else {
      return {};
    }
  } catch (err) {
    if (err.response.data) {
      return thunkAPI.rejectWithValue(err.response.data);
    } else {
      return "There was an issue with your request.";
    }
  }
});

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const res = await axios.post(`/auth/login`, { email, password });
      window.localStorage.setItem(TOKEN, res.data.token);
      thunkAPI.dispatch(me());
    } catch (err) {
      if (err.response.data) {
        return thunkAPI.rejectWithValue(err.response.data);
      } else {
        return "There was an issue with your request.";
      }
    }
  }
);

export const signup = createAsyncThunk(
  "auth/signup",
  async ({ firstName, lastName, email, password }, thunkAPI) => {
    try {
      const res = await axios.post(`/auth/signup`, {
        firstName,
        lastName,
        email,
        password,
      });
      window.localStorage.setItem(TOKEN, res.data.token);
      thunkAPI.dispatch(me());
    } catch (err) {
      if (err.response.data) {
        return thunkAPI.rejectWithValue(err.response.data);
      } else {
        return "There was an issue with your request.";
      }
    }
  }
);

//handling cart thunks
export const getCartByIdThunk = createAsyncThunk(
  "cart/id",
  async ({ userId }) => {
    const { data } = await axios.get(`/api/users/cart/${userId}`);
    return data;
  }
);

export const addToCartThunk = createAsyncThunk(
  "cart/add",
  async ({ userId, sku, platform, quantity, albumTitle, regularPrice }) => {
    const { data } = await axios.put(`/api/users/cart/${userId}/add`, {
      sku,
      platform,
      quantity,
      albumTitle,
      regularPrice,
    });
    return data;
  }
);

export const removeFromCartThunk = createAsyncThunk(
  "cart/add",
  async ({ userId, sku, platform, quantity, albumTitle, regularPrice }) => {
    const { data } = await axios.put(`/api/users/cart/${userId}/remove`, {
      sku,
      platform,
      quantity,
      albumTitle,
      regularPrice,
    });
    return data;
  }
);

/*
  SLICE
*/
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    me: { cart: [] },
    error: null,
  },
  reducers: {
    logout(state, action) {
      window.localStorage.removeItem(TOKEN);
      state.me = { cart: [] };
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(me.fulfilled, (state, action) => {
      state.me = action.payload;
    });
    builder.addCase(me.rejected, (state, action) => {
      state.error = action.error;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.error = action.payload;
    });
    //cart thunk reducers
    builder.addCase(getCartByIdThunk.fulfilled, (state, action) => {
      state.me.cart = action.payload.cart;
    });
    builder.addCase(addToCartThunk.fulfilled, (state, action) => {
      state.me.cart = action.payload.cart;
    });
    builder.addCase(removeFromCartThunk.fulfilled, (state, action) => {
      state.me.cart = action.payload.cart;
    });
  },
});

/*
  ACTIONS
*/
export const { logout } = authSlice.actions;

/*
  REDUCER
*/
export default authSlice.reducer;
