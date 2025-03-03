import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "../../mock/itemsMock";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { CartContext } from "../../context/CartContext";

export function ItemDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const item = items.find((item) => item.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  if (!item) {
    return <div>Item não encontrado</div>;
  }

  const handleAddToCart = () => {
    if (selectedSize && selectedColor) {
      const itemWithDetails = {
        ...item,
        size: selectedSize,
        color: selectedColor,
      };
      addToCart(itemWithDetails);
    } else {
      alert("Por favor, selecione o tamanho e a cor.");
    }
  };

  return (
    <Container sx={{ py: 4 }}>
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={item.pictureUrl}
          alt={item.title}
        />
        <CardContent>
          <Typography variant="h4" component="h1" gutterBottom>
            {item.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {item.description}
          </Typography>

          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12}>
              <Typography variant="h6">Detalhes:</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">
                <strong>Material:</strong> {item.details.material}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="body2">
                <strong>Tamanhos disponíveis:</strong>
              </Typography>
              <FormControl fullWidth sx={{ mt: 1 }}>
                <InputLabel id="size-select-label">Tamanho</InputLabel>
                <Select
                  labelId="size-select-label"
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  label="Tamanho"
                >
                  {item.details.sizes.map((size) => (
                    <MenuItem key={size} value={size}>
                      {size}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="body2">
                <strong>Cores disponíveis:</strong>
              </Typography>
              <Grid container spacing={1} sx={{ mt: 1 }}>
                {item.details.colors.map((color) => (
                  <Grid item key={color}>
                    <Button
                      variant={
                        selectedColor === color ? "contained" : "outlined"
                      }
                      sx={{
                        backgroundColor:
                          selectedColor === color
                            ? color.toLowerCase()
                            : "#fff",
                        color: selectedColor === color ? "#fff" : "#000",
                        border: `2px solid ${color.toLowerCase()}`,
                        minWidth: "40px",
                      }}
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>

          <Typography variant="h5" color="text.primary" sx={{ mb: 2 }}>
            R$ {item.price.toFixed(2)}
          </Typography>

          <Button variant="contained" color="primary" onClick={handleAddToCart}>
            Adicionar ao Carrinho
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}
