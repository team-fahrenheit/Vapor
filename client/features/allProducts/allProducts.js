import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
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
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { shadows } from "@mui/system";

const AllProducts = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const handlePageChange = (event) => {
    console.log("im the change", event);
    //dispatch(fetchAllProducts(parseInt(event.target.innerText)));
  };

  if (allProducts.products) {
    console.log(allProducts);
    return (
      <div>
        <Grid
          container
          sx={{
            justifyContent: "center",
            mt: 2,
            gap: "20px",
            mr: "10px",
            ml: "10px",
            mb: "8px",
          }}
        >
          {allProducts.products.map((product) => (
            <Grid xs item key={product.sku}>
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
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Pagination
          count={allProducts.totalPages}
          onChange={handlePageChange}
          hidePrevButton
          hideNextButton
        />
      </div>
    );
  }
};

export default AllProducts;
