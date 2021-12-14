import styled, { keyframes } from "styled-components";

export const Wrapper = styled.form`
  width: 510px;
  height: 63px;
  border-radius: 10px;
  display: flex;
  gap: 20px;
  align-items: center;
  position: relative;
  :hover {
    cursor: text;
  }
`;

export const Input = styled.input`
  margin-left: 34px;
  background: none;
  border: none;
  height: 20px;
  font-size: 19px;
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
  width: 510px;
  background: ${(props) => props.theme.card.active};
  border-radius: 10px;
  display: flex;
  position: absolute;
  top: 83px;
  z-index: 10;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  animation: ${fadeIn} 0.1s ease-in-out;
`;

export const ErrorMessage = styled.div`
  padding: 10px;
  width: 100%;
`;
