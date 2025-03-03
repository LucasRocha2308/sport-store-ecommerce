import { Categories } from "../../components/Categories";
import { ProductCarousel } from "../../components/ProductCarousel";
import { items } from "../../mock/itemsMock";

export function Home() {
  const hats = items.filter((item) => item.category === "hats");
  const jackets = items.filter((item) => item.category === "jackets");
  const sneakers = items.filter((item) => item.category === "sneakers");
  const balls = items.filter((item) => item.category === "balls");
  const footballBoots = items.filter(
    (item) => item.category === "footballboots"
  );
  const socks = items.filter((item) => item.category === "socks");
  const backpacks = items.filter((item) => item.category === "backpacks");

  return (
    <>
      <Categories />
      <ProductCarousel title="Jaquetas" products={jackets} />
      <ProductCarousel title="Tênis" products={sneakers} />
      <ProductCarousel title="Bolas" products={balls} />
      <ProductCarousel title="Chuteiras" products={footballBoots} />
      <ProductCarousel title="Meias" products={socks} />
      <ProductCarousel title="Mochilas" products={backpacks} />
      <ProductCarousel title="Bonés" products={hats} />
    </>
  );
}
