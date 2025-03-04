import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import {
  Container,
  Typography,
  List,
  ListItem,
  Button,
  Divider,
  Box,
  CardMedia,
  Snackbar,
  Alert,
} from "@mui/material";
import { ItemCount } from "../../components/ItemCount";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";

export function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("info");
  const navigate = useNavigate();

  const totalCompra = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleFinalizarCompra = () => {
    if (auth.currentUser) {
      navigate("/checkout");
    } else {
      setSnackbarMessage("Você precisa estar logado para finalizar a compra!");
      setSnackbarSeverity("warning");
      setSnackbarOpen(true);
      setTimeout(() => {
        navigate("/login", { state: { from: "cart" } });
      }, 3000);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

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

          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleFinalizarCompra}
            >
              Finalizar Compra
            </Button>
          </Box>
        </>
      )}

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
}
