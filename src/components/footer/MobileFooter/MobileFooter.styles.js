import styled from "styled-components";

export const Wrapper = styled.div`
  height: 75px;
  display: none;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  background: ${(props) => props.theme.card.active};

  @media (max-width: 900px) {
    display: grid;
    align-content: center;
  }
`;

export const MenuWrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-auto-flow: column;
`;

export const MenuItem = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
`;

export const Icon = styled.img`
  height: 33px;
  width: 33px;
  filter: ${(props) => props.theme.icon};
`;

export const Title = styled.h3`
  color: ${props => props.theme.color};
  font-size: 11px;
  font-weight: semi-bold;
  line-height: 0px;
`;
