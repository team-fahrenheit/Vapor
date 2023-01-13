import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectProducts, fetchAllProducts } from "./allProductsSlice";
import { Pagination, Grid, PaginationItem } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { getSearch } from "../navbar/SearchBarSlice";
import RecipeReviewCard from "./cards";

const AllProducts = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector(selectProducts);
  const currentSearch = useSelector(getSearch);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  const pageChange = (pageNumber) => {
    dispatch(fetchAllProducts({ search: currentSearch, page: pageNumber }));
  };

  const handleClickPageNumber = (event) => {
    if (event.target.innerText) {
      const pageNumber = parseInt(event.target.innerText);
      pageChange(pageNumber);
    }
  };

  const handleNextPage = () => {
    const pageNumber = allProducts.currentPage + 1;
    pageChange(pageNumber);
  };

  const handlePreviousPage = () => {
    const pageNumber = allProducts.currentPage - 1;
    pageChange(pageNumber);
  };

  if (allProducts.products) {
    return (
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
          {allProducts.products.map((product) => (
            <RecipeReviewCard key={product.sku} product={product} />
          ))}
        </Grid>

        <Pagination
          count={allProducts.totalPages}
          onChange={handleClickPageNumber}
          renderItem={(item) => (
            <PaginationItem
              components={{
                next: () => (
                  <ArrowForwardIcon onClick={handleNextPage}>
                    Next
                  </ArrowForwardIcon>
                ),
                previous: () => (
                  <ArrowBackIcon onClick={handlePreviousPage}>
                    Previous
                  </ArrowBackIcon>
                ),
              }}
              {...item}
            />
          )}
        />
      </div>
    );
  }
};

export default AllProducts;
