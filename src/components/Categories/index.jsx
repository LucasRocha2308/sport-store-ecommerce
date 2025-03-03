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
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    category: "hats",
  },
  {
    id: 2,
    title: "Jaquetas",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    category: "jackets",
  },
  {
    id: 3,
    title: "Tênis",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    category: "sneakers",
  },
  {
    id: 4,
    title: "Mulheres",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    category: "womens",
  },
  {
    id: 5,
    title: "Chuteiras",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    category: "mens",
  },
  {
    id: 6,
    title: "Meias",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    category: "socks",
  },
  {
    id: 7,
    title: "Mochila",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
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
