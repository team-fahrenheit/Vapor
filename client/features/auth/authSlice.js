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
        userType: "Member",
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
  "cart/remove",
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

//wishlist thunks
export const getWishlistByIdThunk = createAsyncThunk(
  "wishlist/id",
  async ({ userId }) => {
    const { data } = await axios.get(`/api/users/wishlist/${userId}`);
    return data;
  }
);

export const addToWishlistThunk = createAsyncThunk(
  "wishlist/add",
  async ({ userId, sku, platform, quantity, albumTitle, regularPrice }) => {
    const { data } = await axios.put(`/api/users/wishlist/${userId}/add`, {
      sku,
      platform,
      quantity,
      albumTitle,
      regularPrice,
    });
    return data;
  }
);

export const removeFromWishlistThunk = createAsyncThunk(
  "wishlist/remove",
  async ({ userId, sku, platform, quantity, albumTitle, regularPrice }) => {
    const { data } = await axios.put(`/api/users/wishlist/${userId}/remove`, {
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
      state.me = { cart: [], wishlist: [] };
      state.error = null;
    },
    guestAdd(state, action) {
      if (!state.me.cart) {
        state.me.cart = [];
      }
      state.me.cart.push(action.payload);
    },
    guestRemove(state, action) {
      state.me.cart = state.me.cart.filter((item) => {
        return item.sku != action.payload.sku;
      });
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
    //wishlist reducers
    builder.addCase(getWishlistByIdThunk.fulfilled, (state, action) => {
      state.me.wishlist = action.payload.wishlist;
    });
    builder.addCase(addToWishlistThunk.fulfilled, (state, action) => {
      state.me.wishlist = action.payload.wishlist;
    });
    builder.addCase(removeFromWishlistThunk.fulfilled, (state, action) => {
      state.me.wishlist = action.payload.wishlist;
    });
  },
});

/*
  ACTIONS
*/
export const { logout, guestAdd, guestRemove } = authSlice.actions;

export const getAuth = (state) => {
  return state.auth;
};

/*
  REDUCER
*/
export default authSlice.reducer;
