import React from "react";
import {Wrapper, Icon, Input } from "./Searchbar.styles"

export default class Searchbar extends React.Component {
    render() {
        return (
            <Wrapper>
                <Icon src="icons/search.svg"/>
                <Input type="text" placeholder="Search..."/>
            </Wrapper>
        )
    }
}
