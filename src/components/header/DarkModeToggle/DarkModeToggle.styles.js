import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  width: 54px;
  height: 52px;
  border-radius: 10px;
  background: ${(props) => props.theme.card.active};
  :hover {
    cursor: pointer;
  }
  @media (max-width: 900px) {
    width: 36px;
    height: 36px;
  }
`;

export const Icon = styled.img`
  transform: rotate(90deg);
  width: 24px;
  height: 20px;
  filter: ${(props) => props.theme.icon};
  @media (max-width: 900px) {
    width: 12px;
    height: 12px;
  }
`;
