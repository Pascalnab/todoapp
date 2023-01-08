import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div> Home Page</div>
      <div id="btn">
        <button
          id="submitbtn"
          onClick={() => {
            navigate("ordersummary");
          }}
        >
          Submit Order
        </button>
      </div>
    </>
  );
}

export default Home;
