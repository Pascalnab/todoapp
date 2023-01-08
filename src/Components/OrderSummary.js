import React from "react";
import { useNavigate } from "react-router-dom";

function OrderSummary() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>Order Confirmed</h1>
      </div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go back
      </button>
    </>
  );
}

export default OrderSummary;
