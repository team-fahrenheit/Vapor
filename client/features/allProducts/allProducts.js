import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Pagination, Grid, PaginationItem } from "@mui/material";
import {
  selectProducts,
  fetchAllProducts,
  updatePage,
} from "./allProductsSlice";
import { getSearch, clearSearch } from "../navbar/SearchBarSlice";

import RecipeReviewCard from "./cards";
import BackToTopButton from "../backToTop/BackToTopButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { EditNotifications } from "@mui/icons-material";

//Attributes necessary for show: class,sku,regularPrice,longDescriptionHtml,image,albumTitle,platform,largeFrontImage,details
const AllProducts = () => {
  const dispatch = useDispatch();
  const currentSearch = useSelector(getSearch);
  const allProducts = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchAllProducts({ search: currentSearch, page: 1 }));
  }, []);

  const handleClickPageNumber = (event, page) => {
    //If the page we're changing to is within the same backend query of 90 products, we call the regular reducer
    if (allProducts[page]) {
      dispatch(updatePage(page));
    } else {
      // Otherwise we thunk the backend api for the next 90 products
      dispatch(fetchAllProducts({ search: currentSearch, page: page }));
    }
  };

  const resetSearch = () => {
    dispatch(fetchAllProducts({ search: "", page: 1 }));
    dispatch(clearSearch());
  };

  return allProducts[allProducts.currentPage] ? (
    <div>
      {currentSearch === "" ? null : (
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={resetSearch}
          sx={{
            float: "right",
            m: 1,
          }}
        >
          Clear Search
        </Button>
      )}
      <Grid
        container
        sx={{
          justifyContent: "center",
          mt: 3,
          mb: 3,
          gap: "20px",
        }}
      >
        {allProducts[allProducts.currentPage].map((product) => (
          <RecipeReviewCard key={product.sku} product={product} />
        ))}
      </Grid>

      <Pagination
        count={allProducts.totalPages}
        siblingCount={2}
        onChange={handleClickPageNumber}
        renderItem={(item) => <PaginationItem {...item} />}
      />
      <BackToTopButton />
    </div>
  ) : (
    <h1> Your search returned no results. </h1>
  );
};

export default AllProducts;
