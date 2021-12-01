import React from "react";
import { Wrapper, Icon } from "./DarkModeToggle.styles"

const DarkModeToggle = (props) => {
    const handleClick = () => {
        props.toggleTheme();
    }
    return (
        <Wrapper onClick={() => handleClick()}>
            <Icon src="icons/scan.svg"/>
        </Wrapper>
    )
}
export default DarkModeToggle