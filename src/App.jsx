import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Contents from "./Components/Contents";
import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import OrderSummary from "./Components/OrderSummary";
import Product from "./Components/Product";
import "./App.css";
import { NoMatch } from "./Components/NoMatch";
import Featured from "./Components/Featured";
import New from "./Components/New";

//<div></div>  <h1 className='content' id='hello'>Type your events in the box below</h1>

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="header" element={<Header />} />
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="content" element={<Contents />} />
        <Route path="ordersummary" element={<OrderSummary />} />
        <Route path="product" element={<Product />}>
          <Route index element={<Featured />} />
          <Route path="featured" element={<Featured />} />
          <Route path="new" element={<New />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
