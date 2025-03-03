import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { truncateText } from "../../utils/truncateText";

export function CardItem({ item }) {
  const navigate = useNavigate();

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
            onClick={(e) => {
              e.preventDefault();
              navigate(`/item/${item.id}`);
            }}
          >
            Adicionar ao Carrinho
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
}
