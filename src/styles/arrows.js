import styled from "styled-components";
import { themes } from "./colors"

export const UpArrow = styled.div`
width: 0; 
height: 0; 
border-left: 5px solid transparent;
border-right: 5px solid transparent;
border-bottom: 5px solid ${themes.dark.money.green};`;

export const DownArrow = styled.div`
width: 0; 
height: 0; 
border-left: 5px solid transparent;
border-right: 5px solid transparent;
border-top: 5px solid ${themes.dark.money.red};`;

export const CurrencyToggleDownArrow = styled.div`
width: 0; 
height: 0; 
border-left: 5px solid transparent;
border-right: 5px solid transparent;
border-top: 5px solid ${themes.dark.money.green};`;

export const NeutralDot = styled.div`
height: 8px;
width: 8px;
border-radius: 50%;
background: ${props => props.background}
`;

