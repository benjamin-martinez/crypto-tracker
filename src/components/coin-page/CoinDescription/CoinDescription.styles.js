import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    justify-items: center;
    width: 1424px;
`;

export const Title = styled.div`
    justify-self: start;
    margin-top:25px;
    margin-bottom: 50px;
`;

export const TextWrapper = styled.div`
    width: 1424px;
    background: ${props => props.theme.card.background};
    border-radius: 10px;
    display: grid;
    justify-items: center;
    align-items: center;
    margin-bottom: 28px;
`;

export const InnerTextWrapper = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    padding-right: 27px;
    padding-left:27px;
    padding-top: 5px;
    padding-bottom: 52px;
`;

export const StackIcon = styled.img`
    width: 22px;
    height: 22px;
    margin-top:24px;
    margin-bottom: 24px;
`;

export const DescText = styled.div`
    line-height: 160% !important;
    text-align: center;
`;

export const LinksWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap:19px;
`;

export const LinkWrapper = styled.div`
    background: ${props => props.theme.card.background};
    border-radius: 10px;
    padding: 0px 70px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const LinkIcon = styled.img`
    width: 13px;
    height: 13px;
    position: absolute;
    left: 20px;
`;

export const CopyIcon = styled.img`
    position: absolute;
    right: 18px;
    height: 20px;
    width: 20px;
`;