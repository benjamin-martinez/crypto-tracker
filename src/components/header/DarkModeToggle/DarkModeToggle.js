import React from "react";
import { Wrapper, Icon } from "./DarkModeToggle.styles"

export default class DarkModeToggle extends React.Component {

    handleClick = () => {
        this.props.toggleTheme();
    }
    render() {
        return (
            <Wrapper onClick={() => this.handleClick()}>
                <Icon src="icons/scan.svg"/>
            </Wrapper>
        )
    }
}

