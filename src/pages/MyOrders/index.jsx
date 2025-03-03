import React, { useEffect, useState } from "react";
import { Container, Typography, List, ListItem, Box } from "@mui/material";
import { auth, db } from "../../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export function MyOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const user = auth.currentUser;
      if (user) {
        const q = query(
          collection(db, "orders"),
          where("userId", "==", user.uid)
        );
        const querySnapshot = await getDocs(q);
        const ordersData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(ordersData);
      }
    };

    fetchOrders();
  }, []);

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Meus Pedidos
      </Typography>

      {orders.length === 0 ? (
        <Typography variant="h6">Nenhum pedido encontrado.</Typography>
      ) : (
        <List>
          {orders.map((order) => (
            <Box key={order.id} sx={{ mb: 2, p: 2, border: "1px solid #ddd" }}>
              <Typography variant="h6">Pedido #{order.id}</Typography>
              <Typography>Total: R$ {order.total.toFixed(2)}</Typography>
              <Typography>Endereço: {order.address}</Typography>
              <Typography>
                Método de Pagamento: {order.paymentMethod}
              </Typography>
              <Typography>Status: {order.status}</Typography>
              <Typography>Itens:</Typography>
              <List>
                {order.items.map((item, idx) => (
                  <ListItem key={idx}>
                    {item.title} - {item.quantity}x - R$ {item.price.toFixed(2)}
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </List>
      )}
    </Container>
  );
}
