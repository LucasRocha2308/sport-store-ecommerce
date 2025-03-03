import { Categories } from "../../components/Categories";
import { ProductCarousel } from "../../components/ProductCarousel";
import { items } from "../../mock/itemsMock";

export function Home() {
  const hats = items.filter((item) => item.category === "hats");
  const jackets = items.filter((item) => item.category === "jackets");
  const sneakers = items.filter((item) => item.category === "sneakers");
  const womens = items.filter((item) => item.category === "womens");
  const mens = items.filter((item) => item.category === "mens");
  const socks = items.filter((item) => item.category === "socks");
  const backpacks = items.filter((item) => item.category === "backpacks");

  return (
    <>
      <Categories />
      <ProductCarousel title="Jaquetas" products={jackets} />
      <ProductCarousel title="Tênis" products={sneakers} />
      <ProductCarousel title="Mulheres" products={womens} />
      <ProductCarousel title="Homens" products={mens} />
      <ProductCarousel title="Meias" products={socks} />
      <ProductCarousel title="Mochilas" products={backpacks} />
      <ProductCarousel title="Bonés" products={hats} />
    </>
  );
}
