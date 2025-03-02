import React, { useState } from "react";
import {
  IconButton,
  Badge,
  Popover,
  Typography,
  List,
  ListItem,
  Button,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../../context/CartContext";
import { ItemCount } from "../ItemCount/ItemCount";

export function CartWidget() {
  const { cart, totalItems, removeFromCart, updateQuantity } = useCart();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
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
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Typography variant="h6" style={{ padding: "10px" }}>
          Carrinho
        </Typography>
        <List>
          {cart.length === 0 ? (
            <Typography style={{ padding: "10px" }}>
              Seu carrinho está vazio.
            </Typography>
          ) : (
            cart.map((item) => (
              <ListItem
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  {item.title}
                  <ItemCount
                    initial={item.quantity}
                    min={1}
                    max={10}
                    onQuantityChange={(newQuantity) =>
                      updateQuantity(item.id, newQuantity)
                    }
                  />
                </div>
                <Button size="small" onClick={() => removeFromCart(item.id)}>
                  Remover
                </Button>
              </ListItem>
            ))
          )}
        </List>
      </Popover>
    </>
  );
}
