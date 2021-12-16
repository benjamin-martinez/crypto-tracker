import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 42px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    :hover {
        cursor: pointer;
        background: ${props => props.theme.card.background}
    }
`;

export const TextWrapper = styled.div`
    padding: 8px;
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const LeftText = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`;

export const RightText = styled.div``;

export const Icon = styled.img`
    height: 14px;
    width: 14px;
`;