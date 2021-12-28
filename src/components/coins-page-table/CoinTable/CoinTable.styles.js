import styled from "styled-components";

export const OutsideWrapper = styled.div`
  background: ${(props) => props.theme.card.background};
  border-radius: 10px;
  display: block;
  width: 1300px;
  @media (max-width: 900px) {
    margin-top: 25px;
    width: ${(props) => props.width}px;
    border-radius: 0px;
  }
`;

export const ScrollWrapper = styled.div`
  width: 100%;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 10px;
    background: ${props => props.theme.background};
  }
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.money.green};
    border-radius: 120px;
    height: 5px;
  }
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Wrapper = styled.table`
  color: ${(props) => props.theme.color};
  position: relative;
  padding: 17px 17px 17px 17px;
  width: 100%;
  display: block;
`;

export const HeaderRow = styled.thead`
  text-align: left;
  th {
    line-height: 100%;
  }
`;

export const THNum = styled.th`
  width: 5.3%;
  text-overflow: ellipsis;
`;

export const THName = styled.th`
  width: 18.4%;
  text-overflow: ellipsis;

  @media (max-width: 900px) {
    with: 25%;
  }
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
