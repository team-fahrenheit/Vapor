import React from "react";
import { useDispatch } from "react-redux";
import { fetchCart } from "./cartSlice";

export const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(returnCart);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return <div>Cart</div>;
};
