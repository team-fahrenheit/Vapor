import { createSlice } from "@reduxjs/toolkit";

const searchBarSlice = createSlice({
  name: "searchBar",
  initialState: "",
  //reminder, reducers are functions of (previousState, an action to do) that define the logic on how to change the state
  reducers: {
    updateSearch(state, action) {
      return action.payload;
    },
  },
});

export const { updateSearch } = searchBarSlice.actions;

//action to be dispatched, return what we are currently searching for
export const getSearch = (state) => {
  return state.searchBar;
};

export default searchBarSlice.reducer;
