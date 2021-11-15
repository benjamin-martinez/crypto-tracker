import React from "react";
import {Wrapper, Icon } from "./QRScanner.styles"

export default class QRScanner extends React.Component {
    render() {
        return (
            <Wrapper>
                <Icon src="icons/scan.svg"/>
            </Wrapper>
        )
    }
}

