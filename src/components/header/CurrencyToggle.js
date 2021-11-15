import React from "react";
import {Wrapper, Icon, Dropdown} from "./CurrencyToggle.styles"
import { NavText } from "styles/Fonts";
import { CurrencyToggleDownArrow } from "styles/arrows";

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

