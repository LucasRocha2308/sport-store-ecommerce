import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { useCart } from "../../context/CartContext";

export function CardItem({ item }) {
  const { addToCart } = useCart();

  return (
    <Card style={{ maxWidth: 250, margin: "10px" }}>
      <CardMedia
        component="img"
        height="140"
        image={item.pictureUrl}
        alt={item.title}
      />
      <CardContent>
        <Typography variant="h6">{item.title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {item.description}
        </Typography>
        <Typography variant="h6" color="primary">
          R$ {item.price.toFixed(2)}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => addToCart(item)}
        >
          Adicionar ao Carrinho
        </Button>
      </CardContent>
    </Card>
  );
}
