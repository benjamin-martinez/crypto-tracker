import React from "react";
import { Link, withRouter } from "react-router-dom";
import {Wrapper, Navigation, RightNav, LeftNav, NavLinkWrapper} from "./Header.styles";
import { NavLinkText } from "styles/Fonts";
import Searchbar from "components/header/Searchbar";
import CurrencyToggle from "components/header/CurrencyToggle";
import QRScanner from "components/header/QRScanner"
import Infographic from "components/header/Infographic";

class Header extends React.Component {

    render() {
        return (
            <Wrapper>
                <Navigation>
                    <RightNav>
                        <Link to="/coins"><NavLinkWrapper currentPage={this.props.location.pathname.slice(1) === "coins"} ><NavLinkText>Coins</NavLinkText></NavLinkWrapper></Link>
                        <Link to="/portfolio"><NavLinkWrapper currentPage={this.props.location.pathname.slice(1) === "portfolio"}><NavLinkText>Portfolio</NavLinkText></NavLinkWrapper></Link>
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
export default withRouter(Header);

