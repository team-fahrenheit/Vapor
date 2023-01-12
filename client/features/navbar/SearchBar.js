import React from "react";
import { FormControl, TextField } from "@mui/material";

const SearchBar = () => {
  return (
    <FormControl>
      <TextField
        required
        id="search-field"
        label="Search"
        size="small"
        color="text"
      ></TextField>
    </FormControl>
  );
};

export default SearchBar;
