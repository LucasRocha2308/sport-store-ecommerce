import React, { useEffect, useState } from "react";
import { getItems } from "../../services/itemsService";
import { CardItem } from "../CardItem";
import { Grid } from "@mui/material";

export function ItemListContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then(setItems);
  }, []);

  return (
    <Grid container spacing={2} justifyContent="center" marginTop="24px">
      {items.map((item) => (
        <CardItem key={item.id} item={item} />
      ))}
    </Grid>
  );
}
