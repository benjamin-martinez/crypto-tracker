import styled from "styled-components";

export const OutsideWrapper = styled.div`
    background: ${props => props.theme.card.background};
    border-radius: 10px;
`;

export const Wrapper = styled.table`
    color: ${props => props.theme.color};
    width: 1712px;
    padding: 21px 21px 21px 21px;
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
