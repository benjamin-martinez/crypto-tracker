import React from "react";
import { Result } from "components";
import { Link } from "react-router-dom";
import { Wrapper, ResultsWrapper } from "./SearchResults.styles";

const SearchResults = (props) => {
    return (
        <Wrapper showResults={props.showResults}>
            <ResultsWrapper>
                {props.results.map((result, index) => (index < 10 && <Link to={`/coin/${result.id}`} onClick={() => props.handleLinkClick()}><Result result={result}/></Link>))}
            </ResultsWrapper>
        </Wrapper>
    )
}

export default SearchResults