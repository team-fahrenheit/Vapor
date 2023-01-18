import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes, NavLink } from "react-router-dom";
import {
  Button,
  CssBaseline,
  Stack,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import AllProducts from "../allProducts/allProducts";
import SignUp from "../auth/SignUp";
import Login from "../auth/Login";
import Checkout from "../cart/Checkout";

const theme = createTheme();

export default function GuestRoute() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Guest stuff regardless of route */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Welcome, valued customer!
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            ></Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <NavLink to="/AllProducts">
                <Button variant="contained">See Products</Button>
              </NavLink>
              <NavLink to="/login">
                <Button variant="contained">Log In</Button>
              </NavLink>
              <NavLink to="/signup">
                <Button variant="contained">Sign Up</Button>
              </NavLink>
            </Stack>
          </Container>
        </Box>
        {/* End of Guest stuff regardless of route */}
        <Routes>
          <Route path="/AllProducts" element={<AllProducts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/checkout" element={<SignUp />} />
          <Route path="*" element={<AllProducts />} />
        </Routes>
        <Container sx={{ py: 8 }} maxWidth="md"></Container>
      </main>
    </ThemeProvider>
  );
}
