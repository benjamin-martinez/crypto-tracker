import React from "react";
import styled from "styled-components"

export default class Searchbar extends React.Component {
    render() {
        return (
            <Wrapper>
                <Icon src="icons/search.svg"/>
                <Input type="text" placeholder="Search..."/>
            </Wrapper>
        )
    }
}

const Wrapper = styled.form`
width: 510px;
height: 63px;
background: ${props => props.theme.card.active};
border-radius: 10px;
display: flex;
gap: 20px;
align-items: center;

:hover {
    cursor: text;
}
`;

const Icon = styled.img`
margin-left: 20px;
height: 24px;
width: 24px;
filter: ${props => props.theme.icon };
`;

const Input = styled.input`
font-size: 17px;
color: ${props => props.theme.color};
background: none;
border: none;
font-weight: bold;

::placeholder {
    color: ${props => props.theme.color};
}
`;