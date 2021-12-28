import styled from "styled-components"

export const Wrapper = styled.header`
    color: ${props => props.theme.color};
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const Navigation = styled.div`
    height: 107px;
    width: 100%;
    background: ${props => props.theme.card.background};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const RightNav = styled.div`
    display: flex;
    margin-left: 90px;
`;

export const LeftNav = styled.div`
    display: flex;
    margin-right: 28px;
    align-items: center;
    gap: 27px;
`;

export const NavLinkWrapper = styled.div`
    padding: 10px 40px;
    border-radius: 10px;
    background: ${props => props.currentPage && props.theme.card.active};
    :hover {
        cursor: pointer;
    }
`;