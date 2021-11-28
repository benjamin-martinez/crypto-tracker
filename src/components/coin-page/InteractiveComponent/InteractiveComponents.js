import React from "react";
import { SectionHeading } from "styles/Fonts";
import { Wrapper, Form, ButtonSpan, RadioButton, ButtonLabel, ConversionWrapper, CoinInput, Name, InputPrice, ConversionArrowsIcon } from "./InteractiveComponents.styles"

export default class InteractiveComponent extends React.Component {
    render() {
        return (
            <Wrapper>
                <Form>
                    <ButtonSpan>
                        <RadioButton type="radio" id="chart-length" />
                        <ButtonLabel for="chart-length">1d</ButtonLabel>
                    </ButtonSpan>
                    <ButtonSpan>
                        <RadioButton type="radio" id="chart-length" />
                        <ButtonLabel for="chart-length">1w</ButtonLabel>
                    </ButtonSpan>
                    <ButtonSpan>
                        <RadioButton type="radio" id="chart-length" />
                        <ButtonLabel for="chart-length">1m</ButtonLabel>
                    </ButtonSpan>
                    <ButtonSpan>
                        <RadioButton type="radio" id="chart-length" />
                        <ButtonLabel for="chart-length">3m</ButtonLabel>
                    </ButtonSpan>
                    <ButtonSpan>
                        <RadioButton type="radio" id="chart-length" />
                        <ButtonLabel for="chart-length">1y</ButtonLabel>
                    </ButtonSpan>
                    <ButtonSpan>
                        <RadioButton type="radio" id="chart-length" isSelected={true}/>
                        <ButtonLabel for="chart-length">Max</ButtonLabel>
                    </ButtonSpan>
                </Form>
                <ConversionWrapper>
                    <CoinInput>
                        <Name><SectionHeading>BTC</SectionHeading></Name>
                        <InputPrice>$56.66</InputPrice>
                    </CoinInput>
                    <ConversionArrowsIcon src="icons/conversion-arrows.svg"/>
                    <CoinInput>
                        <Name><SectionHeading>USD</SectionHeading></Name>
                        <InputPrice>B0.06</InputPrice>
                    </CoinInput>
                </ConversionWrapper>
            </Wrapper>
        )
    }
}