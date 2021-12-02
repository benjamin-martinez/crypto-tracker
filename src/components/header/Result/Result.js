import React from "react";
import { SearchResultsText, SearchResultsSubText } from "styles/Fonts";
import { Wrapper, TextWrapper, LeftText, RightText } from "./Result.styles";

export default class Result extends React.Component {
    render() {
        return (
            <Wrapper>
                    <TextWrapper>
                        <LeftText>
                            <SearchResultsText>{this.props.result.name}</SearchResultsText>
                            <SearchResultsSubText>{this.props.result.market_cap_rank && `#${this.props.result.market_cap_rank}`}</SearchResultsSubText>
                        </LeftText>
                        <RightText>
                            <SearchResultsText>{this.props.result.symbol.toUpperCase()}</SearchResultsText>
                        </RightText>
                    </TextWrapper>
            </Wrapper>
        )
    }
}