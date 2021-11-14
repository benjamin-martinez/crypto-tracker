import React from "react";
import styled from "styled-components"
import { Link, withRouter } from "react-router-dom";
import { NavLinkText } from "../../styles/Fonts";
import Searchbar from "./Searchbar";
import CurrencyToggle from "./CurrencyToggle";
import QRScanner from "./QRScanner"
import Infographic from "./Infographic";

class Header extends React.Component {

    render() {
        return (
            <Wrapper>
                <Navigation>
                    <RightNav>
                        <Link to="/coins"><NavLink currentPage={this.props.location.pathname.slice(1) === "coins"} ><NavLinkText>Coins</NavLinkText></NavLink></Link>
                        <Link to="/portfolio"><NavLink currentPage={this.props.location.pathname.slice(1) === "portfolio"}><NavLinkText>Portfolio</NavLinkText></NavLink></Link>
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
border-radius: 10px;
background: ${props => props.currentPage && props.theme.card.active};
a {
    color: white;
}

:hover {
    cursor: pointer;
}
`;