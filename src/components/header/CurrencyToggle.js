import React from "react";
import styled from "styled-components"
import { NavText } from "../../styles/Fonts";
import { CurrencyToggleDownArrow } from "../../styles/arrows";

export default class CurrencyToggle extends React.Component {
    render() {
        return (
            <Wrapper>
                <Icon><NavText>$</NavText></Icon>
                <Dropdown><NavText>USD</NavText><CurrencyToggleDownArrow /></Dropdown>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-items: center;
gap:15px;
border-radius: 10px;
height: 63px;
width: 135px;
background: ${props => props.theme.card.active}
`;

const Icon = styled.div`
color: ${props => props.theme.money.green};
display: grid;
justify-items: center;
align-items: center;
margin-left: 10px;
height: 33px;
width: 33px;
border-radius: 50%;
background: ${props => props.theme.money.background}`;

const Dropdown = styled.div`
display: flex;
align-items: center;
gap: 7px;

:hover {
    cursor: pointer;
}
`;