import styled from "styled-components";
import { Swiper } from "swiper/react";

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
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
    color: black;
  }
`;
