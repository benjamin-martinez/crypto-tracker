import styled from "styled-components";

export const OutsideWrapper = styled.div`
    background: ${props => props.theme.card.background};
    border-radius: 10px;
`;

export const Wrapper = styled.table`
    color: ${props => props.theme.color};
    position: relative;
    padding: 17px 17px 17px 17px;
    // width: 1380px;
    display: block;
    max-width: -moz-fit-content;
    max-width: fit-content;
    margin: 0 auto;
    overflow-x: auto;
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y:hidden;
    -webkit-overflow-scrolling: touch;
    white-space: nowrap;
`;

export const HeaderRow = styled.thead`
    text-align: left;
    th {
        line-height: 100%;
    }
`;

export const THNum = styled.th`
    width: 5.3%;
`;

export const THName = styled.th`
    width: 18.4%;
`;

export const THPrice = styled.th`
    width: 7.9%;
`;

export const TH1h = styled.th`
    width: 7.4%;
`;

export const TH24h = styled.th`
    width: 8.3%;
`;

export const TH7d = styled.th`
    width: 7.5%;
`;

export const TH24VolMarCap = styled.th`
    width: 18.7%;
`;

export const THCircTotSup = styled.th`
    width: 18.6%;   
`;

export const THLast7d = styled.th`
    width: 8.6%;
`;

export const Pagination = styled.div``;
