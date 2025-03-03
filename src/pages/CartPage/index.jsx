import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {
  Container,
  Typography,
  List,
  ListItem,
  Button,
  Divider,
  Box,
  Grid,
  CardMedia,
} from "@mui/material";
import { ItemCount } from "../../components/ItemCount";

export function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);

  const totalCompra = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Carrinho de Compras
      </Typography>

      {cart.length === 0 ? (
        <Typography variant="h6">Seu carrinho está vazio.</Typography>
      ) : (
        <>
          <List>
            {cart.map((item) => (
              <div
                key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
              >
                <ListItem sx={{ padding: "15px 0" }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 100, height: 100, borderRadius: "8px" }}
                    image={item.pictureUrl}
                    alt={item.title}
                  />

                  <Box sx={{ flexGrow: 1, ml: 2 }}>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Cor:</strong> {item.selectedColor || "--"}
                      <strong>Tamanho:</strong> {item.selectedSize || "--"}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Preço unitário: R$ {item.price.toFixed(2)}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      gap: "10px",
                    }}
                  >
                    <ItemCount
                      initial={item.quantity}
                      min={1}
                      max={10}
                      onQuantityChange={(newQuantity) =>
                        updateQuantity(
                          item.id,
                          item.selectedSize,
                          item.selectedColor,
                          newQuantity
                        )
                      }
                    />

                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      Subtotal: R$ {(item.price * item.quantity).toFixed(2)}
                    </Typography>

                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() =>
                        removeFromCart(
                          item.id,
                          item.selectedSize,
                          item.selectedColor
                        )
                      }
                    >
                      Remover
                    </Button>
                  </Box>
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>

          <Typography
            variant="h5"
            sx={{ paddingTop: "20px", textAlign: "right" }}
          >
            Total: R$ {totalCompra.toFixed(2)}
          </Typography>
        </>
      )}
    </Container>
  );
}
