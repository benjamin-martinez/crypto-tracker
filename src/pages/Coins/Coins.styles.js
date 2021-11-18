import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top:25px;
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
    padding-left: 160px;
`;