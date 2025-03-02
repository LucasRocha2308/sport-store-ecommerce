import React from "react";
import { useParams } from "react-router-dom";
import { items } from "../../mock/itemsMock";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import { useCart } from "../../context/CartContext";

export function CategoryPage() {
  const { category } = useParams();
  const { addToCart } = useCart();
  const categoryItems = items.filter((item) => item.category === category);

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        {category}
      </Typography>
      <Grid container spacing={3}>
        {categoryItems.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                component="img"
                height="200"
                image={item.pictureUrl}
                alt={item.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                <Typography variant="h6" color="text.primary" sx={{ ml: 1 }}>
                  R$ {item.price.toFixed(2)}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ ml: "auto" }}
                  onClick={() => addToCart(item)}
                >
                  Adicionar ao Carrinho
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
