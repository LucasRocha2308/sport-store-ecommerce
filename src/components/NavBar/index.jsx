import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { CartWidget } from "../CartWidget";
import { Link } from "react-router-dom"; // Importe o Link

const navItems = [
  { name: "Shop", path: "/shop" },
  { name: "Meus Pedidos", path: "/meus-pedidos" },
];

export function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              SportStore Ecommerce
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                sx={{ color: "#fff" }}
                component={Link}
                to={item.path}
              >
                {item.name}
              </Button>
            ))}
          </Box>
          <CartWidget />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
