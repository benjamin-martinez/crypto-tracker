import React from "react";
import { Result } from "components";
import { Wrapper, ResultsWrapper } from "./SearchResults.styles";

export default class SearchResults extends React.Component {
    render() {
        return (
            <Wrapper results={this.props.results}>
                <ResultsWrapper>
                    {this.props.results.map((result, index) => (index < 10 && <Result result={result}/>))}
                </ResultsWrapper>
            </Wrapper>
        )
    }
}