import styled, { keyframes } from "styled-components";

export const Wrapper = styled.form`
  width: 408px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  gap: 16px;
  align-items: center;
  position: relative;
  :hover {
    cursor: text;
  }
`;

export const Input = styled.input`
  margin-left: 27px;
  background: none;
  border: none;
  height: 16px;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  font-size: 15px;
  color: ${(props) => props.theme.color};
  &:focus {
    outline: none;
  }
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const ErrorMessageWrapper = styled.div`
  width: 408px;
  background: ${(props) => props.theme.card.active};
  border-radius: 10px;
  display: flex;
  position: absolute;
  top: 66px;
  z-index: 10;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  animation: ${fadeIn} 0.1s ease-in-out;
`;

export const ErrorMessage = styled.div`
  padding: 10px;
  width: 100%;
`;
