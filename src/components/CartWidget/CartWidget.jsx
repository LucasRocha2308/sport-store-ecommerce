import React, { useState } from "react";
import {
  IconButton,
  Badge,
  Popover,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import * as S from "./styles";
import { ItemCount } from "../ItemCount/ItemCount";

export function CartWidget({ items }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [quantities, setQuantities] = useState(items.map(() => 1));

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleQuantityChange = (index, newQuantity) => {
    setQuantities((prevQuantities) => {
      const updatedQuantities = [...prevQuantities];
      updatedQuantities[index] = newQuantity;
      return updatedQuantities;
    });
  };

  const totalItems = quantities.reduce((sum, quantity) => sum + quantity, 0);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <S.StyledCartWidget>
      <IconButton color="inherit" onClick={handleClick}>
        <Badge badgeContent={totalItems} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Typography variant="h6" style={{ padding: "10px" }}>
          Lista de itens
        </Typography>
        <List>
          {items.map((item, index) => (
            <ListItem
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {item}
              <ItemCount
                initial={quantities[index]}
                onQuantityChange={(newQuantity) =>
                  handleQuantityChange(index, newQuantity)
                }
              />
            </ListItem>
          ))}
        </List>
      </Popover>
    </S.StyledCartWidget>
  );
}
