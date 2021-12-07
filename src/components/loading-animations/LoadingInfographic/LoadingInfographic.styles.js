import styled from "styled-components";

export const Wrapper = styled.div`
  height: 55px;
  width: 906px;
  background: ${(props) => props.theme.card.background};
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const InnerWrapper = styled.div`
  height: 12px;
  width: 95%;
  border-radius: 45px;
  background: ${(props) => props.theme.card.active};
`;
