import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51MPAJUKbw2xWIZLPcISGaelrtYljCUm3HXqYeEQzAGqyycanNSbzRxOmtWaCYQvUJgV1bd4IURIWO3sDLeR5xJ6t00ucFJMJlQ";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
