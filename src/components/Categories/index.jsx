import { Category } from "../Category";
import "./styles.css";

const categories = [
  {
    id: 1,
    title: "Chapéus",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
  },
  {
    id: 2,
    title: "Jaquetas",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
  },
  {
    id: 3,
    title: "Tenis",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
  },
  {
    id: 4,
    title: "Mulheres",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
  },
  {
    id: 5,
    title: "Homens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
  },
];

export function Categories() {
  return (
    <div className="container-home">
      {categories.map((category) => {
        return <Category category={category} key={category.title} />;
      })}
    </div>
  );
}
