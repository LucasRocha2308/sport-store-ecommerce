import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home";
import { Shop } from "./pages/shop";
import { CategoryPage } from "./pages/Category";
import { ItemDetail } from "./pages/itemDetail";
import { LoginRegister } from "./pages/loginRegister";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/item/:id" element={<ItemDetail />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
