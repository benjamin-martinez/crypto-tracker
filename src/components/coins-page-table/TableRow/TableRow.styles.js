import styled from "styled-components";

export const Wrapper = styled.tbody`
    text-align: left;
    height: 72px;
    border-width: 1px;
    border-color: red;
    border-style: solid;
    td {
        line-height: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

export const ChangeSpan = styled.span`
    display: flex;
    gap:4px;
    align-items: center;
`;

export const TokenSpan = styled.span`
    display: flex;
    gap: 13px;
    align-items: center;
`;

export const DoubleSpan = styled.span`
    display: grid;
    width: 85%;
`;

export const DoubleSpanTop = styled.span`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const Icon = styled.img`
    height: 33px;
    width: 33px;
`;