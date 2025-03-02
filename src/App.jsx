import React from "react";
import { CartProvider } from "./context/CartContext";
import { NavBar } from "./components/NavBar/ NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <CartProvider>
      <NavBar />
      <ItemListContainer />
    </CartProvider>
  );
}

export default App;
