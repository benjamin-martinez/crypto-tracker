import React from "react";
import { SectionHeading } from "styles/Fonts";
import { BarChartWrapper, LineChartWrapper } from "components/coins-page-charts";
import { Wrapper, ChartsWrapper, SectionWrapper, HeadingDiv } from "./Coins.styles"

export default class Coins extends React.Component {
    render() {
        return (
            <Wrapper>
                <SectionWrapper>
                    <HeadingDiv><SectionHeading>Your Overview</SectionHeading></HeadingDiv>
                    <ChartsWrapper>
                        <LineChartWrapper />
                        <BarChartWrapper />
                    </ChartsWrapper>
                </SectionWrapper>
            </Wrapper>
        )
    }
}
