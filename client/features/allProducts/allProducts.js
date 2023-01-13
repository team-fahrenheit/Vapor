import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectProducts, fetchAllProducts } from "./allProductsSlice";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Typography,
  Pagination,
  Grid,
  PaginationItem,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { getSearch } from "../navbar/SearchBarSlice";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
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
    //console.log(allProducts);
    return (
      <div>
        <Grid
          container
          sx={{
            justifyContent: "center",
            mt: 2,
            gap: "20px",
          }}
        >
          {allProducts.products.map((product) => (
            <RecipeReviewCard product={product} />
          ))}
          {/* <Grid xs item key={product.sku}>
               <Card
                variant="outlined"
                sx={{
                  width: 190,
                  height: 270,
                  backgroundColor: "background.paper",
                  borderColor: "secondary.main",
                  boxShadow: 2,
                }}
              >
                <CardMedia
                  sx={{
                    width: 150,
                    height: 150,
                    margin: "auto",
                    marginTop: 1,
                    borderRadius: 3,
                  }}
                  image={product.image}
                  title={product.name}
                />
                <CardContent>
                  <Typography variant="body2" sx={{ textAlign: "center" }}>
                    {product.albumTitle}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="body2" color="##6b6b6b">
                      {product.regularPrice}
                    </Typography>
                    <IconButton aria-label="shopping-cart-button">
                      <ShoppingCartIcon style={{ color: "#ff6700" }} />
                    </IconButton>
                    <button onClick={console.log(product)}>expand</button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))} */}
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
