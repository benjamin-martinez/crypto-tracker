import React from "react";
import {Wrapper, Navigation, RightNav, LeftNav, NavLinkWrapper} from "components/header/Header.styles"
import { NavLinkText } from "styles/Fonts";
import Searchbar from "components/header/Searchbar";
import CurrencyToggle from "components/header/CurrencyToggle";
import QRScanner from "components/header/QRScanner"
import Infographic from "components/header/Infographic";

export default class Header extends React.Component {
    render() {
        return (
            <Wrapper>
                <Navigation>
                    <RightNav>
                        <NavLinkWrapper><NavLinkText>Coins</NavLinkText></NavLinkWrapper>
                        <NavLinkWrapper><NavLinkText>Portfolio</NavLinkText></NavLinkWrapper>
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
