import React from "react";
import { NavText } from "styles/Fonts";
import { CurrencyToggleDownArrow } from "styles/arrows";
import { Wrapper, Icon, Dropdown } from "./CurrencyToggle.styles"

export default class CurrencyToggle extends React.Component {
    render() {
        return (
            <Wrapper>
                <Icon><NavText>$</NavText></Icon>
                <Dropdown><NavText>USD</NavText><CurrencyToggleDownArrow /></Dropdown>
            </Wrapper>
        )
    }
}

