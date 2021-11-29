import React from "react";
import { SectionHeading } from "styles/Fonts";
import { BackgroundChartWrapper, DurationSelector } from "components/coin-page";
import { addCommasNoDec } from "utils";
import { Wrapper, ConversionWrapper, CoinInput, Name, InputPriceDiv, Input, ConversionArrowsIcon } from "./InteractiveComponent.styles"

export default class InteractiveComponent extends React.Component {

    state = {
        tokenAmount: 1,
        fiatAmount: this.props.coin.market_data.current_price.usd,
        fiatType: "usd",
    }

    handleFiatChange = (e) => {
        const amountWithNoCommas = e.target.value.replace(/,/g, "");
        if(/^\d+$/.test(amountWithNoCommas)) {
            this.setState({
                fiatAmount: e.target.value,
                tokenAmount: parseInt(e.target.value)/parseInt(this.props.coin.market_data.current_price.usd)
            })
        }

        if (e.target.value === "") {
            this.setState({
                fiatAmount: e.target.value,
                tokenAmount: e.target.value
            })
        }
    }

    handleTokenAmountChange = (e) => {
        const amountWithNoCommas = e.target.value.replace(/,/g, "");
        if(/^\d+$/.test(amountWithNoCommas)) {
            this.setState({
                tokenAmount: e.target.value,
                fiatAmount: parseInt(this.props.coin.market_data.current_price.usd)*parseInt(e.target.value)
            })
        }
        if (e.target.value === "") {
            this.setState({
                fiatAmount: e.target.value,
                tokenAmount: e.target.value
            })
        }
    }

    render() {
        return (
            <Wrapper>
                <ConversionWrapper>
                    <CoinInput>
                        <Name><SectionHeading>{this.props.coin.symbol.toUpperCase()}</SectionHeading></Name>
                        <InputPriceDiv><Input value={this.state.tokenAmount} onChange={this.handleTokenAmountChange}/></InputPriceDiv>
                    </CoinInput>
                    <ConversionArrowsIcon src="icons/conversion-arrows.svg"/>
                    <CoinInput>
                        <Name><SectionHeading>USD</SectionHeading></Name>
                        <InputPriceDiv>$<Input value={addCommasNoDec(this.state.fiatAmount)} onChange={this.handleFiatChange}/></InputPriceDiv>
                    </CoinInput>
                </ConversionWrapper>
                <BackgroundChartWrapper coinId={this.props.coin.id} />
            </Wrapper>
        )
    }
}