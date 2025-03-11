import React, { useEffect, useState } from "react";
import "./Pay.scss";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import newRequest from "../../utils/newRequest";
import { useParams } from "react-router-dom";
import CheckoutForm from "../../components/checkoutForm/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51R0LpUKS4pPn8cMswpDp8Qz63L8nbuWn5eDBOlfmj8IqGPe67CSbHw1nW8TY5C251i8FGDkmobCOxRNxm89zZIb200A6DCpUcG"
);

const Pay = () => {
  const [clientSecret, setClientSecret] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await newRequest.post(`/orders/create-payment-intent/${id}`);
        setClientSecret(res.data.clientSecret);
      } catch (err) {
        console.log("Payment Intent Error:", err);
      }
    };
    makeRequest();
  }, []);

  const appearance = { theme: "stripe" };
  const options = { clientSecret, appearance };

  return (
    <div className="pay">
      <div className="payment-container">
        <h2>Complete Your Payment</h2>
        {clientSecret ? (
          <Elements options={options} stripe={stripePromise}>
            <div className="stripe-form">
              <CheckoutForm />
            </div>
          </Elements>
        ) : (
          <p className="loading">Loading payment details...</p>
        )}
      </div>
    </div>
  );
};

export default Pay;
