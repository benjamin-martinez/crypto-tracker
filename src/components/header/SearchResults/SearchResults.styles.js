import styled, {keyframes} from "styled-components";

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const Wrapper = styled.div`
    width: 510px;
    background: ${props => props.theme.card.active};
    border-radius: 10px;
    display: ${props => props.showResults ? "flex" : " none"};
    position: absolute;
    top: 83px;
    z-index: 10;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    animation: ${fadeIn} .1s ease-in-out;
`;

export const ResultsWrapper = styled.div`
    padding: 10px;
    width: 100%;
`;