import React from "react";
import { ChartWrapper } from "components/coins-page-charts";
import { SectionHeading } from "styles/Fonts";
import {
  Wrapper,
  ChartsWrapper,
  ContentWrapper,
  SectionWrapper,
  HeadingDiv,
  CoinTableWrapper,
} from "./Coins.styles";
import { CoinTable } from "components/coins-page-table";

const Coins = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <SectionWrapper>
          <HeadingDiv>
            <SectionHeading>Bitcoin Overview</SectionHeading>
          </HeadingDiv>
          <ChartsWrapper>
            <ChartWrapper chartType="price" />
            <ChartWrapper chartType="volume" />
          </ChartsWrapper>
        </SectionWrapper>
        <SectionWrapper>
          <HeadingDiv>
            <SectionHeading>Top 25 coins by Market Cap</SectionHeading>
          </HeadingDiv>
          <CoinTableWrapper>
            <CoinTable />
          </CoinTableWrapper>
        </SectionWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Coins;
