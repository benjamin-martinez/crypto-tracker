import React from "react";
import { Result } from "components/portfolio-page";
import { useDispatch } from "react-redux";
import { selectAssetFromResults } from "store/portfolio/actions";
import { Wrapper, ResultsWrapper } from "./SearchResults.styles";

const SearchResults = (props) => {
  const dispatch = useDispatch();

  const handleResultClick = (result) => {
    props.handleResultClick(result)
    dispatch(selectAssetFromResults(result))
    console.log(result)
  }

  return (
    <Wrapper showResults={props.showResults}>
      <ResultsWrapper>
        {props.results.map((result) => (
          <Result result={result} handleResultClick={handleResultClick}/>
        ))}
      </ResultsWrapper>
    </Wrapper>
  );
};

export default SearchResults;
