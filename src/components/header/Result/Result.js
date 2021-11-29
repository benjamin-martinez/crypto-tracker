import React from "react";
import { Link } from "react-router-dom";
import { CoinTableRowText } from "styles/Fonts";
import { Wrapper, TextWrapper } from "./Result.styles";

export default class Result extends React.Component {
    render() {
        return (
            <Wrapper>
                <Link to={`/coin/${this.props.result.id}`}><TextWrapper>
                    <CoinTableRowText>{this.props.result.name}</CoinTableRowText>
                    <CoinTableRowText>{this.props.result.symbol.toUpperCase()}</CoinTableRowText>
                </TextWrapper></Link>
            </Wrapper>
        )
    }
}