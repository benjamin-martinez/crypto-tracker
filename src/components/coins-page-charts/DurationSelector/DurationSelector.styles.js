import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  right: 21px;
  top: 21px;
  width: 331px;
  height: 43px;
  background: ${(props) => props.theme.card.active};
  border-radius: 10px;

  @media (max-width: 900px) {
    width: 200px;
    height: 32px;
    top: 250px;
    left: 96px;   
  }

  @media (max-width: 450px) {
    width: 200px;
    height: 32px;
    top: 250px;
    left: 50px;  
  }
`;

export const ContentWrapper = styled.div`
  width: 331px;
  height: 43px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 900px) {
    width: 200px;
    height: 32px;
  }
`;

export const SWrapper = styled.div`
  height: 34px;
  width: 34px;
  color: ${(props) => props.theme.color};
  display: grid;
  background: ${(props) => (props.active ? props.theme.money.green : "none")};
  border-radius: 5px;
  justify-items: center;
  align-items: center;

  :hover {
    cursor: pointer;
  }
  @media (max-width: 900px) {
    width: 25px;
    height: 25px;
  }
`;
