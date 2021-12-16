import styled from "styled-components";

export const Wrapper = styled.header`
  color: ${(props) => props.theme.color};
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Navigation = styled.div`
  height: 86px;
  width: 100%;
  background: ${(props) => props.theme.card.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1250px) {
    height: 75px;
  }
`;

export const RightNav = styled.div`
  display: flex;
  margin-left: 90px;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const MobileHeader = styled.div`
  display: none;
  @media (max-width: 900px) {
    margin-left: 29px;
    display: flex;
  }
`;

export const LeftNav = styled.div`
  display: flex;
  margin-right: 28px;
  align-items: center;
  gap: 27px;
`;

export const NavLinkWrapper = styled.div`
  padding: 8px 32px;
  border-radius: 10px;
  background: ${(props) => props.currentPage && props.theme.card.active};
  :hover {
    cursor: pointer;
  }
`;
