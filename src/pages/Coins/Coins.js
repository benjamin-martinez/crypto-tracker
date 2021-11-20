import React from "react";
import { ChartWrapper } from "components/coins-page-charts";
import { SectionHeading } from "styles/Fonts";
import { Wrapper, ChartsWrapper, ContentWrapper, SectionWrapper, HeadingDiv } from "./Coins.styles"

export default class Coins extends React.Component {
    render() {
        return (
            <Wrapper>
                <ContentWrapper>
                    <SectionWrapper>
                        <HeadingDiv><SectionHeading>Your Overview</SectionHeading></HeadingDiv>
                        <ChartsWrapper>
                            <ChartWrapper chartType="price"/>
                            <ChartWrapper chartType="volume" />
                        </ChartsWrapper>
                    </SectionWrapper>
                </ContentWrapper>
            </Wrapper>
        )
    }
}
