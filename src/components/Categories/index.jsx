import React from "react";
import { SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Category } from "../Category";
import { ContainerHome, StyledSwiper } from "./styles";

const categories = [
  {
    id: 1,
    title: "Bonê",
    imageUrl: "https://m.media-amazon.com/images/I/51keczyjnzL._AC_SX679_.jpg",
    category: "hats",
  },
  {
    id: 2,
    title: "Jaquetas",
    imageUrl:
      "https://images.tcdn.com.br/img/img_prod/972774/jaqueta_masculina_puffer_hering_ktmz_10961_variacao_71771_1_adabe3070856741f9c7f6fdd9609961c.jpg",
    category: "jackets",
  },
  {
    id: 3,
    title: "Tênis",
    imageUrl:
      "https://img.uenicdn.com/cdn-cgi/image/width=1024,fit=crop,f=auto/image/upload/v1554311683/category/shutterstock_344654804.jpg",
    category: "sneakers",
  },
  {
    id: 4,
    title: "Bolas",
    imageUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_678419-MLB76395056467_052024-F.webp",
    category: "balls",
  },
  {
    id: 5,
    title: "Chuteiras",
    imageUrl:
      "https://blog.futfanatics.com.br/wp-content/uploads/2021/08/chuteira-adidas.jpg",
    category: "footballboots",
  },
  {
    id: 6,
    title: "Meias",
    imageUrl:
      "https://dcdn-us.mitiendanube.com/stores/002/282/217/products/meia-masculina-de-algod-o-antiderrapante-meia-esportiva-futebol-9-cores1-83ba8718aa5e2f63ce16613999501857-1024-1024.webp",
    category: "socks",
  },
  {
    id: 7,
    title: "Mochila",
    imageUrl:
      "https://images.tcdn.com.br/img/img_prod/956903/mochila_mizuno_top_6751_variacao_82371_1_bcb1608b3994793778c787f9cd2b8c6a.jpg",
    category: "backpacks",
  },
];

export function Categories() {
  return (
    <ContainerHome>
      <StyledSwiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <Category category={category} />
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </ContainerHome>
  );
}
