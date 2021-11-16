import styled from "styled-components"

export const Slider = styled.div`
    width: ${props => props.width}%;
    height: 100%;
    border-radius: 50px;
    background: ${props => props.background};
`;

export const SliderWrapper = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: 50px;
    background: ${props => props.background};
`;

