import React from "react";
import styled from "styled-components"

export default class QRScanner extends React.Component {
    render() {
        return (
            <Wrapper>
                <Icon src="icons/scan.svg"/>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
display: grid;
justify-items: center;
align-items: center;
width: 67px;
height: 63px;
border-radius: 10px;
background: ${props => props.theme.card.active};

:hover {
    cursor: pointer;
}`;

const Icon = styled.img`
transform: rotate(90deg);
width: 30px;
height: 24px;
filter: ${props => props.theme.icon };`;