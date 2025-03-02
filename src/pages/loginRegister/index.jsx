import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Tabs,
  Tab,
  Box,
} from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export function LoginRegister() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ mt: 4, p: 2 }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Login" />
          <Tab label="Cadastro" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Typography variant="h5" gutterBottom>
            Login
          </Typography>
          <form>
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              variant="outlined"
              required
            />
            <TextField
              label="Senha"
              fullWidth
              margin="normal"
              variant="outlined"
              type="password"
              required
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Entrar
            </Button>
          </form>
          <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
            <Grid item>
              <Link to="/esqueci-senha" style={{ textDecoration: "none" }}>
                Esqueceu a senha?
              </Link>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography variant="h5" gutterBottom>
            Cadastro
          </Typography>
          <form>
            <TextField
              label="Nome"
              fullWidth
              margin="normal"
              variant="outlined"
              required
            />
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              variant="outlined"
              required
            />
            <TextField
              label="Senha"
              fullWidth
              margin="normal"
              variant="outlined"
              type="password"
              required
            />
            <TextField
              label="Confirmar Senha"
              fullWidth
              margin="normal"
              variant="outlined"
              type="password"
              required
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Cadastrar
            </Button>
          </form>
        </TabPanel>
      </Paper>
    </Container>
  );
}
