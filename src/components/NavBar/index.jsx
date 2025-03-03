import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { CartWidget } from "../CartWidget";
import { Link, useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";

const navItems = [
  { name: "Shop", path: "/shop" },
  { name: "Meus Pedidos", path: "/meus-pedidos" },
];

const categories = [
  { name: "Bonés", path: "/category/hats" },
  { name: "Jaquetas", path: "/category/jackets" },
  { name: "Tênis", path: "/category/sneakers" },
  { name: "Bolas", path: "/category/balls" },
  { name: "Chuteiras", path: "/category/footballboots" },
  { name: "Meias", path: "/category/socks" },
  { name: "Mochilas", path: "/category/backpacks" },
];

export function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleCategoriesToggle = () => {
    setCategoriesOpen(!categoriesOpen);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  const menuContent = (
    <>
      {navItems.map((item) => {
        if (item.name === "Meus Pedidos" && !user) return null;
        return (
          <Button
            key={item.name}
            sx={{ color: "#fff" }}
            component={Link}
            to={item.path}
          >
            {item.name}
          </Button>
        );
      })}
    </>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: "block", sm: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              SportStore
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>{menuContent}</Box>
          <CartWidget />
          {user ? (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            width: 240,
          },
        }}
      >
        <List>
          {navItems.map((item) => {
            if (item.name === "Meus Pedidos" && !user) return null;
            return (
              <ListItem
                key={item.name}
                component={Link}
                to={item.path}
                onClick={handleDrawerToggle}
                sx={{ color: "inherit", textDecoration: "none" }}
              >
                <ListItemText primary={item.name} />
              </ListItem>
            );
          })}
          <ListItem button onClick={handleCategoriesToggle}>
            <ListItemText primary="Categorias" />
            {categoriesOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={categoriesOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {categories.map((category) => (
                <ListItem
                  key={category.name}
                  component={Link}
                  to={category.path}
                  onClick={handleDrawerToggle}
                  sx={{ pl: 4, color: "inherit", textDecoration: "none" }}
                >
                  <ListItemText primary={category.name} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </List>
      </Drawer>
    </Box>
  );
}
