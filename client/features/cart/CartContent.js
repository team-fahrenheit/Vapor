import React from "react";
import { Typography, Box, Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCartThunk,
  getCartByIdThunk,
  guestRemove,
} from "../auth/authSlice";

const CartContent = (props) => {
  const dispatch = useDispatch();
  const currentUserId = useSelector((state) => state.auth.me.id);
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);

  const deleteItemFromCart = () => {
    if (isLoggedIn) {
      dispatch(
        removeFromCartThunk({
          userId: currentUserId,
          sku: props.item.sku,
          platform: props.item.platform,
          quantity: props.item.quantity,
          albumTitle: props.item.albumTitle,
          regularPrice: props.item.regularPrice,
        })
      );
      dispatch(getCartByIdThunk({ userId: currentUserId }));
    } else {
      dispatch(
        guestRemove({
          userId: currentUserId,
          sku: props.item.sku,
          platform: props.item.platform,
          quantity: props.item.quantity,
          albumTitle: props.item.albumTitle,
          regularPrice: props.item.regularPrice,
        })
      );
    }
  };

  return (
    <Box key={props.item.sku}>
      <Box
        display="flex"
        sx={{ pt: 2, pb: 2 }}
        alignItems="start"
        justifyContent={"space-between"}
      >
        <Box display="flex" flexDirection={"column"}>
          <Typography variant="h6">{props.item.albumTitle}</Typography>
          <Typography variant="subtitle2">{props.item.platform}</Typography>
        </Box>
        <Box display="flex" flexDirection={"column"}>
          <Typography variant="h6" justifyContent={"end"}>
            ${props.item.regularPrice}
          </Typography>
          <Box display="flex" flexDirection={"row"} sx={{ pt: 1, pb: 1 }}>
            <Button size="small" variant="contained">
              -
            </Button>
            <Typography variant="body1" justifyContent={"end"} sx={{ p: 1 }}>
              {props.item.quantity}
            </Typography>
            <Button size="small" variant="contained">
              +
            </Button>
          </Box>
          <Button onClick={deleteItemFromCart}>Remove</Button>
        </Box>
      </Box>
      <Divider variant="inset" />
    </Box>
  );
};

export default CartContent;
