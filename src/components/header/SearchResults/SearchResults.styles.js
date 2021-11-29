import styled, {keyframes} from "styled-components";

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(-85px)
    }
    to {
        opacity: 1;
        transform: translateX(0)
    }
`;

export const Wrapper = styled.div`
    width: 510px;
    background: ${props => props.theme.card.active};
    border-radius: 10px;
    display: ${props => props.results.length > 0 ? "flex" : " none"};
    position: absolute;
    top: 83px;
    z-index: 10;
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    animation: ${fadeIn} .2s ease-in-out;
`;

export const ResultsWrapper = styled.div`
padding: 10px;
width: 100%;`;