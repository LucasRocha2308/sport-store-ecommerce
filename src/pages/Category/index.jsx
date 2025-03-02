import React from "react";
import { useParams } from "react-router-dom";
import { items } from "../../mock/itemsMock";

export function CategoryPage() {
  const { category } = useParams();
  const categoryItems = items.filter((item) => item.category === category);

  return (
    <div>
      <h1>{category}</h1>
      <div>
        {categoryItems.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <img src={item.pictureUrl} alt={item.title} />
            <p>{item.description}</p>
            <p>R$ {item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
