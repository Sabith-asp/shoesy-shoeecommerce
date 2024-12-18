import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Provider from "./context/Provider";
import Login from "./components/Login/Login";
import SingUp from "./components/SignUp/SignUp";
import AuthLayout from "./components/AuthLayout/AuthLayout";
import ProductDetails from "./components/ProductDetail/ProductDetails";
import Cart from "./pages/Cart/Cart";
import CartProvider from "./context/CartProvider";
import OrderHistory from "./components/OrderHistory/OrderHistory";
import Products from "./pages/Products/Products";

const Routers = () => {
  return (
    <Provider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/:category" element={<Products />} />
              <Route path="auth" element={<AuthLayout />} />
              <Route path="/product">
                <Route path="detail/:id" element={<ProductDetails />} />
              </Route>
              <Route path="/order-history" element={<OrderHistory />} />
              <Route path="cart" element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </Provider>
  );
};

export default Routers;
