import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Pagination, Grid, PaginationItem } from "@mui/material";

import {
  selectProducts,
  fetchAllProducts,
  updatePage,
} from "./allProductsSlice";
import { getSearch } from "../navbar/SearchBarSlice";

import RecipeReviewCard from "./cards";
import BackToTopButton from "../backToTop/BackToTopButton";

//Attributes necessary for show: class,sku,regularPrice,longDescriptionHtml,image,albumTitle,platform,largeFrontImage,details
const AllProducts = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector(selectProducts);
  const currentSearch = useSelector(getSearch);

  useEffect(() => {
    dispatch(fetchAllProducts({ search: "", page: 1 }));
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

  return allProducts[allProducts.currentPage] ? (
    <div>
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
    <h1> Loading... </h1>
  );
};

export default AllProducts;
