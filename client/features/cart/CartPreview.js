import React, { useState } from "react";
import {
  Drawer,
  Typography,
  Box,
  IconButton,
  Button,
  Badge,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";

let CartPreview = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  let dummyCart = [
    {
      sku: 123456789,
      albumTitle: "Madden 2023",
      platform: "PlayStation 5",
      regularPrice: 60.0,
      quantity: 1,
    },
    {
      sku: 456789456,
      albumTitle: "Minecraft",
      platform: "PC",
      regularPrice: 15.0,
      quantity: 2,
    },
    {
      sku: 987654321,
      albumTitle: "Call of Duty: Modern Warfare",
      platform: "Xbox",
      regularPrice: 70.0,
      quantity: 1,
    },
  ];

  const cartItemCount = dummyCart.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0
  );
  const cartTotal = dummyCart.reduce(
    (accumulator, item) => accumulator + item.regularPrice * item.quantity,
    0
  );

  const cartContent = dummyCart.map((item) => (
    <Box key={item.sku}>
      <Box
        display="flex"
        sx={{ pt: 2, pb: 2 }}
        alignItems="start"
        justifyContent={"space-between"}
      >
        <Box display="flex" flexDirection={"column"}>
          <Typography variant="h6">{item.albumTitle}</Typography>
          <Typography variant="subtitle2">{item.platform}</Typography>
        </Box>
        <Box display="flex" flexDirection={"column"}>
          <Typography variant="h6" justifyContent={"end"}>
            ${item.regularPrice}
          </Typography>
          <Box display="flex" flexDirection={"row"} sx={{ pt: 1, pb: 1 }}>
            <Button size="small" variant="contained">
              -
            </Button>
            <Typography variant="body1" justifyContent={"end"} sx={{ p: 1 }}>
              {item.quantity}
            </Typography>
            <Button size="small" variant="contained">
              +
            </Button>
          </Box>
        </Box>
      </Box>
      <Divider variant="inset" />
    </Box>
  ));

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
          {cartContent}
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
          <Typography
            variant="subtitle2"
            color="darkgray"
          >{` $${cartTotal}`}</Typography>
        </Button>
      </Drawer>
    </>
  );
};

export default CartPreview;
