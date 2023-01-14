import React, { useState } from "react";
import {
  Drawer,
  Typography,
  Box,
  IconButton,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Link as LinkMui,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SellIcon from "@mui/icons-material/Sell";

function CartPreview() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        onClick={() => setIsCartOpen(true)}
      >
        <ShoppingCartIcon style={{ color: "rgba(232,230,230,0.54)" }} />
      </IconButton>
      <Drawer
        anchor="right"
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      >
        <Box p={2} width="250px" textAlign="center">
          <Typography variant="h6" component="div">
            Cart
          </Typography>
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <SellIcon />
                </ListItemIcon>
                <ListItemText primary="Cart Item 1 | PS5 | $50" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <SellIcon />
                </ListItemIcon>
                <ListItemText primary="Cart Item 2 | Xbox Series X | $20" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <SellIcon />
                </ListItemIcon>
                <ListItemText primary="Cart Item 3 | PC | $20" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
        <LinkMui href="/checkout">
          <Button textAlign="center">Pay Now</Button>
        </LinkMui>
      </Drawer>
    </>
  );
}

export default CartPreview;
