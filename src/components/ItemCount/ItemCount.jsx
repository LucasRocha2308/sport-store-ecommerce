import React, { useState } from "react";
import { IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export function ItemCount({
  initial = 1,
  min = 1,
  max = 10,
  onQuantityChange,
}) {
  const [quantity, setQuantity] = useState(initial);

  const handleIncrease = () => {
    if (quantity < max) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onQuantityChange && onQuantityChange(newQuantity);
    }
  };

  const handleDecrease = () => {
    if (quantity > min) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange && onQuantityChange(newQuantity);
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <IconButton onClick={handleDecrease} disabled={quantity <= min}>
        <RemoveIcon />
      </IconButton>
      <Typography>{quantity}</Typography>
      <IconButton onClick={handleIncrease} disabled={quantity >= max}>
        <AddIcon />
      </IconButton>
    </div>
  );
}
