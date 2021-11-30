import React from "react";
import { CoinTableRowText, SearchResultsText } from "styles/Fonts";
import { Wrapper, TextWrapper } from "./Result.styles";

export default class Result extends React.Component {
    render() {
        return (
            <Wrapper>
                    <TextWrapper>
                        <SearchResultsText>{this.props.result.name}</SearchResultsText>
                        <SearchResultsText>{this.props.result.symbol.toUpperCase()}</SearchResultsText>
                    </TextWrapper>
            </Wrapper>
        )
    }
}