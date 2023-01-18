import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormControl, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { fetchAllProducts } from "../allProducts/allProductsSlice";
import { updateSearch } from "./searchBarSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleKeyPress = (event) => {
    event.preventDefault();
    if (event.keyCode == 13) {
      navigate("/AllProducts");
      dispatch(updateSearch(event.target.value));
      dispatch(fetchAllProducts({ search: event.target.value, page: 1 }));
      event.target.value = "";
    }
  };

  return (
    <FormControl>
      <TextField
        required
        id="search-field"
        label="Search Our Products"
        size="small"
        color="text"
        onKeyUp={handleKeyPress}
      >
        <Link to="/AllProducts" onKeyUp={handleKeyPress} />
      </TextField>
    </FormControl>
  );
};

export default SearchBar;
