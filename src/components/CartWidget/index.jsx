import React from "react";
import { IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

export function CartWidget() {
  const { totalItems } = useCart();

  return (
    <IconButton color="inherit" component={Link} to="/cart">
      <Badge badgeContent={totalItems} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
}
