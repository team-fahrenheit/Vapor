import React from "react";
import { useSelector } from "react-redux";
import {
  Button,
  CssBaseline,
  Stack,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Routes, NavLink } from "react-router-dom";

import Checkout from "../cart/Checkout";
import AllUsers from "./AllUsers";
import AllProducts from "../allProducts/allProducts";
import Infographic from "./Infographic/Infographic";

const theme = createTheme();

export default function AdminRoute() {
  const user = useSelector((state) => state.auth.me);

  return (
    <div>
      {user.userType === "Admin" ? (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <main>
            {/* Admin stuff regardless of route */}
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
                  Welcome, {user.firstName + " " + user.lastName}
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  color="text.secondary"
                  paragraph
                >
                  {user.userType} of Vapor
                </Typography>
                <Stack
                  sx={{ pt: 4 }}
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                >
                  <NavLink to="/Infographic">
                    <Button variant="contained">See Infographic</Button>
                  </NavLink>
                  <NavLink to="/AllUsers">
                    <Button variant="contained">See Users</Button>
                  </NavLink>
                  <NavLink to="/AllProducts">
                    <Button variant="contained">See Products</Button>
                  </NavLink>
                </Stack>
              </Container>
            </Box>
            {/* End of admin stuff regardless of route */}
            <Routes>
              <Route path="/login" element={<Infographic />} />
              <Route path="/Infographic" element={<Infographic />} />
              <Route
                path="/AllUsers"
                element={<AllUsers userType={user.userType} />}
              />
              <Route path="/AllProducts" element={<AllProducts />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
            <Container sx={{ py: 8 }} maxWidth="md"></Container>
          </main>
        </ThemeProvider>
      ) : (
        <p> u are not an admin :O</p>
      )}
    </div>
  );
}
