import { createSlice } from "@reduxjs/toolkit";

const SearchBarSlice = createSlice({
  name: "searchBar",
  initialState: "",
  //reminder, reducers are functions of (previousState, an action to do) that define the logic on how to change the state
  reducers: {
    updateSearch(state, action) {
      return action.payload;
    },
    clearSearch() {
      return "";
    },
  },
});

export const { updateSearch, clearSearch } = SearchBarSlice.actions;

//action to be dispatched, return what we are currently searching for
export const getSearch = (state) => {
  return state.searchBar;
};

export default SearchBarSlice.reducer;
