import React, { useEffect, useState } from "react";
import { getItems, getItemsByCategory } from "../../services/itemsService";

export function ItemListContainer({ category }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (category) {
      getItemsByCategory(category).then(setItems);
    } else {
      getItems().then(setItems);
    }
  }, [category]);

  return (
    <div>
      <h2>{category ? `Categoria: ${category}` : "Todos os itens"}</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.title} - R$ {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
