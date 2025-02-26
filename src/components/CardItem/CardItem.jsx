import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

export function CardItem({ item, onAddToCart }) {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={item.pictureUrl}
        alt={item.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="h6" color="primary" sx={{ marginTop: 1 }}>
          R$ {item.price.toFixed(2)}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => onAddToCart(item)}
          sx={{ marginTop: 2 }}
        >
          Adicionar ao Carrinho
        </Button>
      </CardContent>
    </Card>
  );
}
