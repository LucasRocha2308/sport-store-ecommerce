import React from "react";
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { CardItem } from "../CardItem";
import { Typography } from "@mui/material";
import { ContainerHome, StyledSwiper } from "./styles";
import { Link } from "react-router-dom";

export function ProductCarousel({ title, products }) {
  return (
    <ContainerHome sx={{ mb: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        {title}
      </Typography>
      <StyledSwiper
        modules={[Navigation]}
        spaceBetween={8}
        slidesPerView={4}
        navigation
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Link to={`/item/${product.id}`} style={{ textDecoration: "none" }}>
              <CardItem item={product} />
            </Link>
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </ContainerHome>
  );
}
