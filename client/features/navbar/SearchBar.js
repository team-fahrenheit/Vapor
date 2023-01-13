import React, { useState } from "react";
import { FormControl, TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../allProducts/allProductsSlice";
import { updateSearch, getSearch } from "./SearchBarSlice";

const SearchBar = () => {
  const dispatch = useDispatch();

  const [searchInput, setSearchInput] = useState("");

  const handleKeyPress = (event) => {
    if (event.keyCode == 13) {
      dispatch(updateSearch(event.target.value));
      dispatch(fetchAllProducts({ search: searchInput, page: 1 }));
      event.target.value = "";
    }
    setSearchInput(event.target.value);
  };

  return (
    <FormControl>
      <TextField
        required
        id="search-field"
        label="Search"
        size="small"
        color="text"
        onKeyUp={handleKeyPress}
      ></TextField>
    </FormControl>
  );
};

export default SearchBar;
