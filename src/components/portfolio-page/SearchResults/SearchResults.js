import React from "react";
import { Result } from "components";
import { Link } from "react-router-dom";
import { Wrapper, ResultsWrapper } from "./SearchResults.styles";

const SearchResults = (props) => {
  return (
    <Wrapper showResults={props.showResults}>
      <ResultsWrapper>
        {props.results.map((result) => (
          <Result result={result} />
        ))}
      </ResultsWrapper>
    </Wrapper>
  );
};

export default SearchResults;
