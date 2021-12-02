import React from "react";
import { SectionHeading } from "styles/Fonts";
import { BackgroundChartWrapper } from "components/coin-page";
import { addCommasNoDec } from "utils";
import { Wrapper, ConversionWrapper, CoinInput, Name, InputPriceDiv, Input, ConversionArrowsIcon } from "./InteractiveComponent.styles"

export default class InteractiveComponent extends React.Component {

    state = {
        tokenAmount: 1,
        fiatAmount: this.props.coin.market_data.current_price.usd,
        fiatType: "usd",
    }

    handleAmountChange = (e, isFiat) => {
        const amountValue = e.target.value
        const amountWithNoCommas = amountValue.replace(/,/g, "");
        if(/^\d+$/.test(amountWithNoCommas)) {
            if(isFiat) {
                this.setState({
                    tokenAmount: amountValue,
                    fiatAmount: parseInt(this.props.coin.market_data.current_price.usd)/parseInt(amountValue)
                })
            } else {
                this.setState({
                    tokenAmount: e.target.value,
                    fiatAmount: parseInt(this.props.coin.market_data.current_price.usd)*parseInt(e.target.value)
                })
            }
        }
        if (amountValue === "") {
            this.setState({
                fiatAmount: "",
                tokenAmount: ""
            })
        }
    }

    render() {
        return (
            <Wrapper>
                <ConversionWrapper>
                    <CoinInput>
                        <Name><SectionHeading>{this.props.coin.symbol.toUpperCase()}</SectionHeading></Name>
                        <InputPriceDiv><Input value={this.state.tokenAmount} onChange={(e) => this.handleAmountChange(e,false)}/></InputPriceDiv>
                    </CoinInput>
                    <ConversionArrowsIcon src="icons/conversion-arrows.svg"/>
                    <CoinInput>
                        <Name><SectionHeading>USD</SectionHeading></Name>
                        <InputPriceDiv>$<Input value={addCommasNoDec(this.state.fiatAmount)} onChange={(e) => this.handleAmountChange(e,true)}/></InputPriceDiv>
                    </CoinInput>
                </ConversionWrapper>
                <BackgroundChartWrapper coinId={this.props.coin.id} />
            </Wrapper>
        )
    }
}