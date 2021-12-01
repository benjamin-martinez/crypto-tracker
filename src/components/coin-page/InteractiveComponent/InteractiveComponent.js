import React, { useState } from "react";
import { SectionHeading } from "styles/Fonts";
import { BackgroundChartWrapper } from "components/coin-page";
import { addCommasNoDec } from "utils";
import { Wrapper, ConversionWrapper, CoinInput, Name, InputPriceDiv, Input, ConversionArrowsIcon } from "./InteractiveComponent.styles"

const InteractiveComponent = (props) => {

    const [tokenAmount, setTokenAmount] = useState(1)
    const [fiatAmount, setFiatAmount] = useState(props.coin.market_data.current_price.usd)
    const [fiatType, setFiatType] = useState("usd")

    const handleFiatChange = (e) => {
        const amountWithNoCommas = e.target.value.replace(/,/g, "");
        if(/^\d+$/.test(amountWithNoCommas)) {
            setFiatAmount(e.target.value)
            setTokenAmount(parseInt(e.target.value)/parseInt(props.coin.market_data.current_price.usd))
        }
        if (e.target.value === "") {
            setFiatAmount(e.target.value)
            setTokenAmount(e.target.value)
        }
    }

    const handleTokenAmountChange = (e) => {
        const amountWithNoCommas = e.target.value.replace(/,/g, "");
        if(/^\d+$/.test(amountWithNoCommas)) {
                setTokenAmount(e.target.value)
                setFiatAmount(parseInt(props.coin.market_data.current_price.usd)*parseInt(e.target.value))
        }
        if (e.target.value === "") {
            setFiatAmount(e.target.value)
            setTokenAmount(e.target.value)
        }
    }
    return (
        <Wrapper>
            <ConversionWrapper>
                <CoinInput>
                    <Name><SectionHeading>{props.coin.symbol.toUpperCase()}</SectionHeading></Name>
                    <InputPriceDiv><Input value={tokenAmount} onChange={handleTokenAmountChange}/></InputPriceDiv>
                </CoinInput>
                <ConversionArrowsIcon src="icons/conversion-arrows.svg"/>
                <CoinInput>
                    <Name><SectionHeading>USD</SectionHeading></Name>
                    <InputPriceDiv>$<Input value={addCommasNoDec(fiatAmount)} onChange={handleFiatChange}/></InputPriceDiv>
                </CoinInput>
            </ConversionWrapper>
            <BackgroundChartWrapper coinId={props.coin.id} />
        </Wrapper>
    )
}

export default InteractiveComponent