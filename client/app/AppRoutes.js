import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Login from "../features/auth/Login";
import SignUp from "../features/auth/SignUp";
import AdminRoute from "../features/AdminRoute/AdminRoute";
import AllProducts from "../features/allProducts/allProducts";
import { me } from "./store";
import Checkout from "../features/cart/Checkout";

/**
 * COMPONENT
 */

const AppRoutes = () => {
  const user = useSelector((state) => state.auth.me);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {user.userType === "Admin" ? (
        <Routes>
          <Route path="/*" element={<AdminRoute />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/AllProducts" element={<AllProducts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
