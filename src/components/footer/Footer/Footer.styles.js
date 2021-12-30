import styled from "styled-components";

export const Wrapper = styled.div`
  height: 75px;
  width: 100%;
  display: flex;
  width: 100%;
  align-items: end;
`;

export const ContentWrapper = styled.div`
  height: 75px;
  width: 100%;
  display: flex;
  gap: 25px;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.img`
  filter: ${(props) => props.theme.icon};
  height: 40px;
  height: 40px;
  :hover {
    cursor: pointer;
  }
`;
