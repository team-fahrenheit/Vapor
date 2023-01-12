import React from "react";
import { useDispatch } from "react-redux";
import { fetchCart } from "./cartSlice";
import Box from "@mui/material/Box";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";

export const Cart = () => {
  //   const dispatch = useDispatch();
  //   const cart = useSelector(returnCart);

  //   useEffect(() => {
  //     dispatch(fetchCart());
  //   }, [dispatch]);

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
      >
        <FormControl>
          <InputLabel>Contact</InputLabel>
          <OutlinedInput
            id="component-outlined"
            defaultValue="Phone"
            label="Phone"
          />
          <OutlinedInput
            id="component-outlined"
            defaultValue="Email"
            label="Email"
          />
        </FormControl>
        <FormControl>
          <InputLabel>Payment</InputLabel>
          <OutlinedInput
            id="component-outlined"
            defaultValue="Card Number"
            label="Card Number"
          />
          <OutlinedInput
            id="component-outlined"
            defaultValue="United States"
            label="CardCountry"
          />
          <OutlinedInput
            id="component-outlined"
            defaultValue="MM/YY"
            label="Card Expiration"
          />
          <OutlinedInput
            id="component-outlined"
            defaultValue="CVV"
            label="CVV"
          />
        </FormControl>
        <FormControl>
          <InputLabel>Billing Address</InputLabel>
          <OutlinedInput
            id="component-outlined"
            defaultValue="First Name"
            label="First Name"
          />
          <OutlinedInput
            id="component-outlined"
            defaultValue="Last Name"
            label="Last Name"
          />
          <OutlinedInput
            id="component-outlined"
            defaultValue="United States"
            label="BillingCountry"
          />
          <OutlinedInput
            id="component-outlined"
            defaultValue="Address"
            label="BillingAddress"
          />
          <OutlinedInput
            id="component-outlined"
            defaultValue="Address 2 (Optional)"
            label="BillingAddress2"
          />
          <OutlinedInput
            id="component-outlined"
            defaultValue="City"
            label="BillingCity"
          />
          <OutlinedInput
            id="component-outlined"
            defaultValue="State"
            label="BillingState"
          />
          <OutlinedInput
            id="component-outlined"
            defaultValue="Zip Code"
            label="BillingZip"
          />
        </FormControl>
      </Box>
    </div>
  );
};
