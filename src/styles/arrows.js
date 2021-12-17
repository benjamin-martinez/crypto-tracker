import styled from "styled-components";
import { themes } from "./colors";

export const UpArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid ${themes.dark.money.green};
`;

export const DownArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid ${themes.dark.money.red};
`;

export const CurrencyToggleDownArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid ${themes.dark.money.green};
  @media (max-width: 900px) {
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-top: 3px solid ${themes.dark.money.green};
  }
`;

export const CurrencyToggleUpArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid ${themes.dark.money.green};
  @media (max-width: 900px) {
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-bottom: 3px solid ${themes.dark.money.green};
  }
`;

export const NeutralDot = styled.div`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background: ${(props) => props.background};
`;

export const DownNuetralArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 7px solid ${(props) => props.theme.color};
`;

export const UpNuetralArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 7px solid ${(props) => props.theme.color};
`;

export const SmallDownNuetralArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid ${(props) => props.theme.color};
`;

export const SmallRightNuetralArrow = styled.div`
  width: 0;
  height: 0;
  border-bottom: 4px solid transparent;
  border-left: 4px solid ${(props) => props.theme.color};
  border-right: 4px solid transparent;
  border-top: 4px solid transparent;
  :hover {
    cursor: pointer;
  }
`;

export const SmallLeftNuetralArrow = styled.div`
  width: 0;
  height: 0;
  border-bottom: 4px solid transparent;
  border-left: 4px solid transparent;
  border-right: 4px solid ${(props) => props.theme.color};
  border-top: 4px solid transparent;
  :hover {
    cursor: pointer;
  }
`;

export const LeftArrow = styled.div`
  width: 0;
  height: 0;
  border-bottom: 10px solid transparent;
  border-left: 10px solid transparent;
  border-right: 10px solid ${(props) => props.theme.color};
  border-top: 10px solid transparent;
  display: none;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 900px) {
    display: block;
  }
`;

export const RightArrow = styled.div`
  width: 0;
  height: 0;
  border-bottom: 10px solid transparent;
  border-left: 10px solid ${(props) => props.theme.color};
  border-right: 10px solid transparent;
  border-top: 10px solid transparent;
  display: none;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 900px) {
    display: block;
  }
`;
