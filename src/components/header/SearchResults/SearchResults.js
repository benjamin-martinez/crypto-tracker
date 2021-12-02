import React from "react";
import { Result } from "components";
import { Link } from "react-router-dom";
import { Wrapper, ResultsWrapper } from "./SearchResults.styles";

export default class SearchResults extends React.Component {


    render() {
        return (
            <Wrapper showResults={this.props.showResults}>
                <ResultsWrapper>
                    {this.props.results.map((result) => <Link to={`/coin/${result.id}`} onClick={() => this.props.handleLinkClick()}><Result result={result}/></Link>)}
                </ResultsWrapper>
            </Wrapper>
        )
    }
}