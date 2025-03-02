import styled from "styled-components";

export const CategoryContainer = styled.div`
  width: 350px;
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;

  &:hover {
    cursor: pointer;
  }
`;

export const ImageBackgroud = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;

  &:hover {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;

export const CategoryContent = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.white};
  opacity: 0.7;
  position: absolute;

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: ${({ theme }) => theme.colors["gray-500"]};
  }

  p {
    font-weight: lighter;
    font-size: 16px;
  }
`;
