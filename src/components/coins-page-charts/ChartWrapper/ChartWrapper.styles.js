import styled from "styled-components";

export const Wrapper = styled.div`
  justify-self: start;
  width: 602px;
  height: 359px;
  padding: 13px;
  position: relative;
  border-radius: 10px;
  background: ${(props) => props.theme.card.background};

  @media (max-width: 1300px) {
    display: ${(props) => !props.visible && "none"};
  }

  @media (max-width: 900px) {
    display: ${(props) => !props.visible && "none"};
    width: 361px;
    height: 215px;
  }

  @media (max-width: 450px) {
    display: ${(props) => !props.visible && "none"};
    width: 270px;
    height: 215px;
  }
`;

export const SubWrapper = styled.div`
  position: absolute;
  bottom: 21px;
  left: 47px;
  @media (max-width: 900px) {
    left: 28px;
    bottom: 13px;
  }
`;

export const ErrorWrapper = styled.div`
  justify-self: start;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 602px;
  height: 359px;
  padding: 21px;
  position: relative;
  border-radius: 10px;
  background: ${(props) => props.theme.card.background};
  @media (max-width: 900px) {
    width: 361px;
    height: 215px;
  }
`;

export const TextWrapper = styled.div`
  position: absolute;
  top: 21px;
  left: 21px;
  color: ${(props) => props.theme.color};
`;
