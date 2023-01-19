import * as React from "react";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { v4 as uuidv4 } from "uuid";
import { addToCartThunk, addToWishlistThunk } from "../auth/authSlice";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = useState(false);
  const [addCartDisabled, setAddCartDisabled] = useState(false);
  const [addWishlistDisabled, setAddWishlistDisabled] = useState(false);

  const currentUserId = useSelector((state) => state.auth.me.id);
  const dispatch = useDispatch();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    setAddCartDisabled(true);
    dispatch(
      addToCartThunk({
        userId: currentUserId,
        sku: props.product.sku,
        platform: props.product.platform,
        quantity: 1,
        albumTitle: props.product.albumTitle,
        regularPrice: props.product.regularPrice,
      })
    );
  };

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    setAddWishlistDisabled(true);
    dispatch(
      addToWishlistThunk({
        userId: currentUserId,
        sku: props.product.sku,
        platform: props.product.platform,
        quantity: 1,
        albumTitle: props.product.albumTitle,
        regularPrice: props.product.regularPrice,
      })
    );
  };

  return (
    <Card sx={{ maxWidth: 240, minWidth: 240, height: "100%" }}>
      <CardHeader
        sx={{ minHeight: 150 }}
        title={`${props.product.albumTitle}`}
      />
      <Typography
        sx={{
          textAlign: "right",
          mr: "20px",
        }}
      >
        {props.product.platform}
      </Typography>
      <CardMedia
        component="img"
        height="194"
        image={`${props.product.largeFrontImage}`}
        alt={`${props.product.albumTitle} game cover`}
      />
      <CardContent>
        <Typography variant="body2" color="text.main">
          {`$${props.product.regularPrice}`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {addWishlistDisabled ? (
          "Added to wishlist!"
        ) : (
          <IconButton
            aria-label="wishlist-button"
            onClick={handleAddToWishlist}
          >
            <FavoriteIcon style={{ color: "#5c5c5c" }} />
          </IconButton>
        )}

        {addCartDisabled ? (
          "Added to Cart!"
        ) : (
          <IconButton
            aria-label="shopping-cart-button"
            onClick={handleAddToCart}
          >
            <AddShoppingCartIcon style={{ color: "#3a6ea5" }} />
          </IconButton>
        )}

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>
            {props.product.longDescription
              ? props.product.longDescription.replace(/&#[0-9]+;/gm, "")
              : "More information coming soon."}
          </Typography>

          {props.product.details
            .filter((item) => {
              return (
                item["name"] === "ESRB Rating" || item["name"] === "Multiplayer"
              );
            })
            .map((item) => {
              return (
                <Typography
                  key={uuidv4()}
                  sx={{
                    mt: 1,
                  }}
                >
                  {item.name + ": " + item.value + "\n"}
                </Typography>
              );
            })}
        </CardContent>
      </Collapse>
    </Card>
  );
}
