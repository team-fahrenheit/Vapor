import * as React from "react";
import { styled } from "@mui/material/styles";
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
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { v4 as uuidv4 } from "uuid";

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
  console.log(props);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 300, minWidth: 300 }}>
      <CardHeader title={`${props.product.albumTitle}`} />
      <Typography>{props.product.platform}</Typography>
      <CardMedia
        component="img"
        height="194"
        image={`${props.product.largeFrontImage}`}
        alt={`${props.product.albumTitle} game cover`}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {`$${props.product.regularPrice}`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="wishlist-button">
          <FavoriteIcon />
        </IconButton>

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
            {/* {props.product.features.map((line) => {
              return Object.values(line) + "\n";
            })} */}
            {props.product.longDescription}
          </Typography>

          {props.product.details
            .filter((item) => {
              return (
                item["name"] === "ESRB Rating" || item["name"] === "Multiplayer"
              );
            })
            .map((item) => {
              return (
                <Typography key={uuidv4()}>
                  {item.name + ": " + item.value + "\n"}
                </Typography>
              );
            })}

          <IconButton aria-label="shopping-cart-button">
            <ShoppingCartIcon style={{ color: "#ff6700" }} />
          </IconButton>
        </CardContent>
      </Collapse>
    </Card>
  );
}

{
  /* <Grid xs item key={product.sku}>
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
          ))} */
}
