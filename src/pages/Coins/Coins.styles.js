import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top:25px;
`;

export const ContentWrapper = styled.div`
    
display: grid;
justify-items: center;
`;

export const ChartsWrapper = styled.div`
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    gap:45px;
`;

export const SectionWrapper = styled.div`
    color: ${props => props.theme.color};
`;

export const HeadingDiv = styled.div`
`;