import * as Style from "./styles";

export function Category({ category }) {
  const { title, imageUrl } = category;

  return (
    <Style.CategoryContainer>
      <Style.ImageBackgroud style={{ backgroundImage: `url(${imageUrl})` }} />
      <Style.CategoryContent>
        <h2>{title}</h2>
        <p>Comprar Agora</p>
      </Style.CategoryContent>
    </Style.CategoryContainer>
  );
}
