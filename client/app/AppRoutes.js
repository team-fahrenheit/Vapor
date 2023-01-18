import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AdminRoute from "../features/AdminRoute/AdminRoute";
import MemberRoute from "../features/MemberRoute/MemberRoute";
import GuestRoute from "../features/GuestRoute/GuestRoute";
import { me } from "./store";

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
      {!user.userType ? (
        <Routes>
          <Route path="/*" element={<GuestRoute />} />
        </Routes>
      ) : user.userType === "Admin" ? (
        <Routes>
          <Route path="/*" element={<AdminRoute />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/*" element={<MemberRoute />} />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
