import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity, selectedSize, selectedColor) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find(
        (cartItem) =>
          cartItem.id === item.id &&
          cartItem.selectedSize === selectedSize &&
          cartItem.selectedColor === selectedColor
      );

      if (itemExists) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id &&
          cartItem.selectedSize === selectedSize &&
          cartItem.selectedColor === selectedColor
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      } else {
        return [
          ...prevCart,
          { ...item, quantity, selectedSize, selectedColor },
        ];
      }
    });
  };

  const updateQuantity = (itemId, selectedSize, selectedColor, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId &&
        item.selectedSize === selectedSize &&
        item.selectedColor === selectedColor
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeFromCart = (itemId, selectedSize, selectedColor) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) =>
          item.id !== itemId ||
          item.selectedSize !== selectedSize ||
          item.selectedColor !== selectedColor
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

export { CartContext };
