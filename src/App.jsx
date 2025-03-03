import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./pages/home";
import { Shop } from "./pages/shop";
import { CategoryPage } from "./pages/Category";
import { ItemDetail } from "./pages/itemDetail";
import { LoginRegister } from "./pages/loginRegister";
import { CartPage } from "./pages/CartPage";
import { MyOrders } from "./pages/MyOrders";
import { CheckoutPage } from "./pages/CheckoutPage";
import { PrivateRoute } from "./components/PrivateRoutes";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route element={<PrivateRoute />}>
          <Route path="/meus-pedidos" element={<MyOrders />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Route>
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/item/:id" element={<ItemDetail />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
