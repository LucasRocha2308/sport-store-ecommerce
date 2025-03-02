import styled from "styled-components";
import { Swiper } from "swiper/react";

export const ContainerHome = styled.div`
  display: flex;
  margin-top: 24px;
  max-width: 1500px;
  margin: 0 auto;
  padding: 20px;
`;

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  padding-bottom: 20px;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: blue;
  }

  .swiper-pagination {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background-color: #000;
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    background-color: #ff0000;
    opacity: 1;
  }

  @media (max-width: 768px) {
    .swiper-slide {
      transform: scale(0.8);
      margin: 8px 0;
    }
  }

  @media (max-width: 480px) {
    .swiper-slide {
      transform: scale(0.7);
      margin: 8px 0;
    }
  }
`;
