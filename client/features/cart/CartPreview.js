import React, { useState, useEffect } from "react";
import {
  Drawer,
  Typography,
  Box,
  IconButton,
  Button,
  Badge,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { getAuth } from "../auth/authSlice";
import CartContent from "./CartContent";

let CartPreview = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const loggedInCart = useSelector(getAuth);

  const userCart = loggedInCart.me.cart ? loggedInCart.me.cart : [];

  useEffect(() => {}, [userCart]);

  const cartItemCount = userCart.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0
  );

  const cartTotal = userCart.reduce(
    (accumulator, item) =>
      parseFloat(accumulator) + parseFloat(item.regularPrice) * item.quantity,
    0
  );

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        onClick={() => setIsCartOpen(true)}
      >
        <Badge
          aria-label={cartItemCount}
          badgeContent={cartItemCount}
          max={99}
          color="secondary"
        >
          <ShoppingCartIcon style={{ color: "rgba(232,230,230,0.54)" }} />
        </Badge>
      </IconButton>
      <Drawer
        anchor="right"
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      >
        <Box
          sx={{ pt: 3 }}
          display="flex"
          justifyContent={"center"}
          flexDirection="column"
          alignItems="center"
        >
          <Typography variant="h4">Cart</Typography>
        </Box>
        <Paper elevation={0} sx={{ mt: 1, width: "95%", p: 3 }}>
          {userCart.map((item) => {
            return <CartContent key={item.sku} item={item} />;
          })}
        </Paper>
        <Button
          sx={{ mt: 2, ml: 8, mr: 8 }}
          variant="contained"
          href="/checkout"
        >
          <Typography
            variant="subtitle1"
            sx={{ mr: 1 }}
          >{`Checkout `}</Typography>
          <Typography variant="subtitle2" color="darkgray">
            {` $${cartTotal}`}
          </Typography>
        </Button>
      </Drawer>
    </>
  );
};

export default CartPreview;
