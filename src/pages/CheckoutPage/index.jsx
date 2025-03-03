import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Snackbar,
  Alert,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../../firebase";
import { collection, addDoc } from "firebase/firestore";

export function CheckoutPage() {
  const { cart, clearCart } = useContext(CartContext);
  const [cep, setCep] = useState("");
  const [numero, setNumero] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [addressData, setAddressData] = useState({
    logradouro: "",
    bairro: "",
    localidade: "",
    uf: "",
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const navigate = useNavigate();

  const totalCompra = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCepChange = async (e) => {
    const cepValue = e.target.value.replace(/\D/g, "");
    setCep(cepValue);

    if (cepValue.length === 8) {
      try {
        const response = await fetch(
          `https://viacep.com.br/ws/${cepValue}/json/`
        );
        const data = await response.json();

        if (!data.erro) {
          setAddressData({
            logradouro: data.logradouro,
            bairro: data.bairro,
            localidade: data.localidade,
            uf: data.uf,
          });
          setAddress(
            `${data.logradouro}, ${numero}, ${data.bairro}, ${data.localidade} - ${data.uf}`
          );
        } else {
          setSnackbarMessage("CEP não encontrado!");
          setSnackbarSeverity("error");
          setSnackbarOpen(true);
        }
      } catch (error) {
        console.error("Erro ao buscar CEP:", error);
        setSnackbarMessage("Erro ao buscar CEP. Tente novamente.");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      }
    }
  };

  const handleFinalizarPedido = async () => {
    if (!address || !paymentMethod || !numero) {
      setSnackbarMessage("Preencha todos os campos!");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }

    const user = auth.currentUser;
    if (!user) {
      setSnackbarMessage("Você precisa estar logado para finalizar a compra!");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      navigate("/login");
      return;
    }

    try {
      const enderecoCompleto = `${addressData.logradouro}, ${numero}, ${addressData.bairro}, ${addressData.localidade} - ${addressData.uf}`;

      const orderData = {
        userId: user.uid,
        items: cart.map((item) => ({
          id: item.id,
          title: item.title,
          quantity: item.quantity,
          price: item.price,
        })),
        total: totalCompra,
        address: enderecoCompleto,
        paymentMethod,
        status: "pendente",
        createdAt: new Date(),
      };

      const docRef = await addDoc(collection(db, "orders"), orderData);
      console.log("Pedido salvo com ID: ", docRef.id);

      clearCart();

      setSnackbarMessage("Pedido finalizado com sucesso!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);

      navigate("/meus-pedidos");
    } catch (error) {
      console.error("Erro ao salvar pedido: ", error);
      setSnackbarMessage("Erro ao finalizar o pedido. Tente novamente.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Finalizar Compra
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="CEP"
          fullWidth
          value={cep}
          onChange={handleCepChange}
          required
        />
        <TextField
          label="Número"
          fullWidth
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          required
        />
        <TextField
          label="Endereço de Entrega"
          fullWidth
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <FormControl fullWidth>
          <InputLabel>Método de Pagamento</InputLabel>
          <Select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            label="Método de Pagamento"
            required
          >
            <MenuItem value="Cartão de Crédito">Cartão de Crédito</MenuItem>
            <MenuItem value="PIX">PIX</MenuItem>
            <MenuItem value="Boleto">Boleto</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Typography variant="h5" sx={{ mt: 4 }}>
        Total: R$ {totalCompra.toFixed(2)}
      </Typography>

      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        onClick={handleFinalizarPedido}
      >
        Finalizar Pedido
      </Button>

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
