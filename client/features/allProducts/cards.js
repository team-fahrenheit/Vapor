import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={`${props.product.name}`} />
      <CardMedia
        component="img"
        height="194"
        image={`${props.product.image}`}
        alt={`${props.product.albumTitle} game cover`}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {`${props.product.regularPrice}`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
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
