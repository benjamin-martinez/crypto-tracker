import React from "react";
import { SearchResultsText, SearchResultsSubText } from "styles/Fonts";
import {
  Wrapper,
  TextWrapper,
  Icon,
  LeftText,
  RightText,
} from "./Result.styles";

const Result = (props) => {
  return (
    <Wrapper>
      <TextWrapper>
        <LeftText>
          <Icon src={props.result.thumb} />
          <SearchResultsText>{props.result.name}</SearchResultsText>
          <SearchResultsSubText>
            {props.result.market_cap_rank && `#${props.result.market_cap_rank}`}
          </SearchResultsSubText>
        </LeftText>
        <RightText>
          <SearchResultsText>
            {props.result.symbol.toUpperCase()}
          </SearchResultsText>
        </RightText>
      </TextWrapper>
    </Wrapper>
  );
};

export default Result;
