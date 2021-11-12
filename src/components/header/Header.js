import React from "react";
import styled from "styled-components"
import { NavLinkText } from "../../styles/Fonts";
import Searchbar from "./Searchbar";
import CurrencyToggle from "./CurrencyToggle";
import QRScanner from "./QRScanner"
import Infographic from "./Infographic";

export default class Header extends React.Component {
    render() {
        return (
            <Wrapper>
                <Navigation>
                    <RightNav>
                        <NavLink><NavLinkText>Coins</NavLinkText></NavLink>
                        <NavLink><NavLinkText>Portfolio</NavLinkText></NavLink>
                    </RightNav>
                    <LeftNav>
                        <Searchbar />
                        <CurrencyToggle />
                        <QRScanner />
                    </LeftNav>
                </Navigation>
                <Infographic />
            </Wrapper>
        )
    }
}

const Wrapper = styled.header`
color: ${props => props.theme.color};
width: 100%;
display: flex;
flex-direction: column;

`;

const Navigation = styled.div`
height: 107px;
width: 100%;
background: ${props => props.theme.card.background};
display: flex;
justify-content: space-between;
align-items: center;`;

const RightNav = styled.div`
display: flex;
margin-left: 90px;
`;

const LeftNav = styled.div`
display: flex;
margin-right: 28px;
align-items: center;
gap: 27px;`;

const NavLink = styled.div`
padding: 10px 40px;

:hover {
    cursor: pointer;
}
`;