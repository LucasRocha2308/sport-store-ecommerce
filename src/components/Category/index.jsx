import * as Style from "./styles";
import { Link } from "react-router-dom";

export function Category({ category }) {
  const { title, imageUrl, category: categoryName } = category;

  return (
    <Link to={`/category/${categoryName}`} style={{ textDecoration: "none" }}>
      <Style.CategoryContainer>
        <Style.ImageBackgroud style={{ backgroundImage: `url(${imageUrl})` }} />
        <Style.CategoryContent>
          <h2>{title}</h2>
          <p>Comprar Agora</p>
        </Style.CategoryContent>
      </Style.CategoryContainer>
    </Link>
  );
}
