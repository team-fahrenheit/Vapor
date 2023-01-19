import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { getAuth } from "../auth/authSlice";

const WishList = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const loggedInWishlist = useSelector(getAuth);

  const userWishlist =
    isLoggedIn && loggedInWishlist.me.wishlist
      ? loggedInWishlist.me.wishlist
      : [];

  useEffect(() => {}, [userWishlist]);

  return (
    <div className="wishlist">
      <h2>My Wishlist</h2>
      <ul>
        {userWishlist.map((item) => (
          <li key={item.sku}>
            <h3>{item.albumTitle}</h3>
            <p>{item.platform}</p>
            <p>Price: ${item.regularPrice}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WishList;
