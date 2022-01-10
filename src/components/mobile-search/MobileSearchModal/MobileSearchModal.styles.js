import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${(props) => props.theme.background};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: ${(props) => !props.isActive && "none"};
`;

export const ContentWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchWrapper = styled.form`
  color: ${(props) => props.theme.color};
`;

export const ExitButton = styled.img`
  position: absolute;
  top: 30px;
  right: 30px;
  width: 31px;
  height: 31px;
  :hover {
    cursor: pointer;
  }
`;

export const Input = styled.input`
  font-size: 22px;
  color: ${(props) => props.theme.color};
  background: none;
  padding-top: 16px;
  padding-bottom: 16px;
  border: none;
  font-weight: bold;

  ::placeholder {
    color: ${(props) => props.theme.color};
  }
  &:focus {
    outline: none;
  }
`;
