import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Searchbar, Infographic, CurrencyToggle, DarkModeToggle} from "components";
import { NavLinkText } from "styles/Fonts";
import { Wrapper, Navigation, RightNav, LeftNav, NavLinkWrapper } from "./Header.styles";

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
                        <DarkModeToggle />
                    </LeftNav>
                </Navigation>
                <Infographic />
            </Wrapper>
        )
    }
}
export default withRouter(Header);

