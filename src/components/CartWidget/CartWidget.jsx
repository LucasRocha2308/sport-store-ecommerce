import React, { useState } from "react";
import {
  IconButton,
  Badge,
  Popover,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import * as S from "./styles";

export function CartWidget({ items }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <S.StyledCartWidget>
      <IconButton color="inherit" onClick={handleClick}>
        <Badge badgeContent={items.length} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Typography variant="h6" style={{ padding: "10px" }}>
          Lista de itens
        </Typography>
        <List>
          {items.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </List>
      </Popover>
    </S.StyledCartWidget>
  );
}
