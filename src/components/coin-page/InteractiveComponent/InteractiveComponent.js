import React, { useState } from "react";
import { SectionHeading } from "styles/Fonts";
import { BackgroundChartWrapper } from "components/coin-page";
import { addCommasNoDec } from "utils";
import { Wrapper, ConversionWrapper, CoinInput, Name, InputPriceDiv, Input, ConversionArrowsIcon } from "./InteractiveComponent.styles"

const InteractiveComponent = (props) => {

    const [tokenAmount, setTokenAmount] = useState(1)
    const [fiatAmount, setFiatAmount] = useState(props.coin.market_data.current_price.usd)
    const [fiatType, setFiatType] = useState("usd")

    const handleAmountChange = (e, isFiat) => {
        const amountValue = e.target.value
        const amountWithNoCommas = amountValue.replace(/,/g, "");
        if(/^\d+$/.test(amountWithNoCommas)) {
            if(isFiat) {
                setTokenAmount(amountValue)
                setFiatAmount(parseInt(props.coin.market_data.current_price.usd)/parseInt(amountValue))
            } else {
                setTokenAmount(e.target.value)
                setFiatAmount(parseInt(props.coin.market_data.current_price.usd)*parseInt(e.target.value))
            }
        }
        if (amountValue === "") {
            setFiatAmount("")
            setTokenAmount("")
        }
    }
    return (
        <Wrapper>
            <ConversionWrapper>
                <CoinInput>
                    <Name><SectionHeading>{props.coin.symbol.toUpperCase()}</SectionHeading></Name>
                    <InputPriceDiv><Input value={tokenAmount} onChange={(e) => handleAmountChange(e,false)}/></InputPriceDiv>
                </CoinInput>
                <ConversionArrowsIcon src="icons/conversion-arrows.svg"/>
                <CoinInput>
                    <Name><SectionHeading>USD</SectionHeading></Name>
                    <InputPriceDiv>$<Input value={addCommasNoDec(fiatAmount)} onChange={(e) => handleAmountChange(e,true)}/></InputPriceDiv>
                </CoinInput>
            </ConversionWrapper>
            <BackgroundChartWrapper coinId={props.coin.id} />
        </Wrapper>
    )
}

export default InteractiveComponent
