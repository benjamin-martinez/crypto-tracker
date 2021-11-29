import styled from "styled-components";

export const Wrapper = styled.div`
width: 100%;
height: 50px;
display: flex;
align-items: center;
border-bottom: ${props => props.theme.color} .5px solid;


`;

export const TextWrapper = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
:hover {
    cursor: pointer;
    color: ${props => props.theme.money.blue}
}
`;