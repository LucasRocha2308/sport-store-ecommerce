import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { useCart } from "../../context/CartContext";
import { truncateText } from "../../utils/truncateText";
import { Link } from "react-router-dom";

export function CardItem({ item }) {
  const { addToCart } = useCart();

  return (
    <Link to={`/item/${item.id}`} style={{ textDecoration: "none" }}>
      <Card style={{ maxWidth: 250, margin: "10px" }}>
        <CardMedia
          component="img"
          height="200"
          image={item.pictureUrl}
          alt={item.title}
        />
        <CardContent>
          <Typography variant="h6">{truncateText(item.title, 18)}</Typography>
          <Typography variant="body2" color="textSecondary">
            {truncateText(item.description, 50)}
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
    </Link>
  );
}
