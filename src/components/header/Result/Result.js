import React from "react";
import { SearchResultsText } from "styles/Fonts";
import { Wrapper, TextWrapper } from "./Result.styles";

const Result = (props) => {
    return (
        <Wrapper>
                <TextWrapper>
                    <SearchResultsText>{props.result.name}</SearchResultsText>
                    <SearchResultsText>{props.result.symbol.toUpperCase()}</SearchResultsText>
                </TextWrapper>
        </Wrapper>
    )
}

export default Result