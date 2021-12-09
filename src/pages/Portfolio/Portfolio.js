import React from "react";
import { Slider, SliderWrapper } from "styles/sliders";
import { ButtonText, SubSectionHeading, PortfolioEntryTitle, SectionHeading2 } from "styles/Fonts";
import { UpArrow, DownArrow } from "styles/arrows";
import { themes } from "styles/colors";
import {
  Wrapper,
  ContentWrapper,
  AddAssetButton,
  SectionWrapper,
  AssetWrapper,
  IdOuterWrapper,
  IdInnerWrapper,
  CoinImageWrapper,
  CoinIcon,
  PriceDataWrapper,
  PriceChangeWrapper,
  PriceText,
  SubSectionSpan,
  SubSectionContent,
  MarketDataWrapper,
  EditIcon,
  EditIconWrapper,
  SubSectionHeadingWrapper
} from "./Portfolio.styles";

const Portfolio = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <AddAssetButton>
          <ButtonText>Add Asset</ButtonText>
        </AddAssetButton>
        <SectionWrapper>
          <SectionHeading2>Your Statistics</SectionHeading2>
          <AssetWrapper>
            <IdOuterWrapper>
              <IdInnerWrapper>
                <CoinImageWrapper>
                  <CoinIcon src="icons/bitcoin.svg" />
                </CoinImageWrapper>
                <PortfolioEntryTitle>Bitcoin (BTC)</PortfolioEntryTitle>
              </IdInnerWrapper>
            </IdOuterWrapper>
            <PriceDataWrapper>
              <MarketDataWrapper>
                <SubSectionHeadingWrapper>
                  <SubSectionHeading>Market Price:</SubSectionHeading>
                  <EditIconWrapper>
                    <EditIcon src="icons/pencil-edit.svg" />
                  </EditIconWrapper>
                </SubSectionHeadingWrapper>
                <SubSectionContent>
                  <SubSectionSpan>
                    <SubSectionHeading>Current price:</SubSectionHeading>
                    <PriceText>$12,000</PriceText>
                  </SubSectionSpan>
                  <SubSectionSpan>
                    <SubSectionHeading>Price change 24h</SubSectionHeading>
                    <PriceChangeWrapper>
                      <UpArrow />
                      <PriceText>2.1%</PriceText>
                    </PriceChangeWrapper>
                  </SubSectionSpan>
                  <SubSectionSpan>
                    <SubSectionHeading>Market Cap vs Volume</SubSectionHeading>
                    <PriceText>2%</PriceText>
                    <SliderWrapper
                      height="13px"
                      width="55px"
                      background={themes.dark.money.blue}
                    >
                      <Slider width="35" background="white" />
                    </SliderWrapper>
                  </SubSectionSpan>
                  <SubSectionSpan>
                    <SubSectionHeading>
                      Circ Supply vs Max Supply
                    </SubSectionHeading>
                    <PriceChangeWrapper>
                      <UpArrow />
                      <PriceText>2.1%</PriceText>
                    </PriceChangeWrapper>
                  </SubSectionSpan>
                </SubSectionContent>
              </MarketDataWrapper>
              <MarketDataWrapper>
                <SubSectionHeadingWrapper>
                  <SubSectionHeading>Your Coin:</SubSectionHeading>
                  <EditIconWrapper>
                    <EditIcon src="icons/pencil-edit.svg" />
                  </EditIconWrapper>
                </SubSectionHeadingWrapper>
                <SubSectionContent>
                  <SubSectionSpan>
                    <SubSectionHeading>Current price:</SubSectionHeading>
                    <PriceText>$12,000</PriceText>
                  </SubSectionSpan>
                  <SubSectionSpan>
                    <SubSectionHeading>Price change 24h</SubSectionHeading>
                    <PriceChangeWrapper>
                      <UpArrow />
                      <PriceText>2.1%</PriceText>
                    </PriceChangeWrapper>
                  </SubSectionSpan>
                  <SubSectionSpan>
                    <SubSectionHeading>Market Cap vs Volume</SubSectionHeading>
                    <PriceText>2%</PriceText>
                    <SliderWrapper
                      height="13px"
                      width="55px"
                      background={themes.dark.money.blue}
                    >
                      <Slider width="35" background="white" />
                    </SliderWrapper>
                  </SubSectionSpan>
                  <SubSectionSpan>
                    <SubSectionHeading>
                      Circ Supply vs Max Supply
                    </SubSectionHeading>
                    <PriceChangeWrapper>
                      <UpArrow />
                      <PriceText>2.1%</PriceText>
                    </PriceChangeWrapper>
                  </SubSectionSpan>
                </SubSectionContent>
              </MarketDataWrapper>
            </PriceDataWrapper>
          </AssetWrapper>
          <AssetWrapper>
            <IdOuterWrapper>
              <IdInnerWrapper>
                <CoinImageWrapper>
                  <CoinIcon src="icons/bitcoin.svg" />
                </CoinImageWrapper>
                <PortfolioEntryTitle>Bitcoin (BTC)</PortfolioEntryTitle>
              </IdInnerWrapper>
            </IdOuterWrapper>
            <PriceDataWrapper>
              <MarketDataWrapper>
                <SubSectionHeadingWrapper>
                  <SubSectionHeading>Market Price:</SubSectionHeading>
                  <EditIconWrapper>
                    <EditIcon src="icons/pencil-edit.svg" />
                  </EditIconWrapper>
                </SubSectionHeadingWrapper>
                <SubSectionContent>
                  <SubSectionSpan>
                    <SubSectionHeading>Current price:</SubSectionHeading>
                    <PriceText>$12,000</PriceText>
                  </SubSectionSpan>
                  <SubSectionSpan>
                    <SubSectionHeading>Price change 24h</SubSectionHeading>
                    <PriceChangeWrapper>
                      <UpArrow />
                      <PriceText>2.1%</PriceText>
                    </PriceChangeWrapper>
                  </SubSectionSpan>
                  <SubSectionSpan>
                    <SubSectionHeading>Market Cap vs Volume</SubSectionHeading>
                    <PriceText>2%</PriceText>
                    <SliderWrapper
                      height="13px"
                      width="55px"
                      background={themes.dark.money.blue}
                    >
                      <Slider width="35" background="white" />
                    </SliderWrapper>
                  </SubSectionSpan>
                  <SubSectionSpan>
                    <SubSectionHeading>
                      Circ Supply vs Max Supply
                    </SubSectionHeading>
                    <PriceChangeWrapper>
                      <UpArrow />
                      <PriceText>2.1%</PriceText>
                    </PriceChangeWrapper>
                  </SubSectionSpan>
                </SubSectionContent>
              </MarketDataWrapper>
              <MarketDataWrapper>
                <SubSectionHeadingWrapper>
                  <SubSectionHeading>Your Coin:</SubSectionHeading>
                  <EditIconWrapper>
                    <EditIcon src="icons/pencil-edit.svg" />
                  </EditIconWrapper>
                </SubSectionHeadingWrapper>
                <SubSectionContent>
                  <SubSectionSpan>
                    <SubSectionHeading>Current price:</SubSectionHeading>
                    <PriceText>$12,000</PriceText>
                  </SubSectionSpan>
                  <SubSectionSpan>
                    <SubSectionHeading>Price change 24h</SubSectionHeading>
                    <PriceChangeWrapper>
                      <UpArrow />
                      <PriceText>2.1%</PriceText>
                    </PriceChangeWrapper>
                  </SubSectionSpan>
                  <SubSectionSpan>
                    <SubSectionHeading>Market Cap vs Volume</SubSectionHeading>
                    <PriceText>2%</PriceText>
                    <SliderWrapper
                      height="13px"
                      width="55px"
                      background={themes.dark.money.blue}
                    >
                      <Slider width="35" background="white" />
                    </SliderWrapper>
                  </SubSectionSpan>
                  <SubSectionSpan>
                    <SubSectionHeading>
                      Circ Supply vs Max Supply
                    </SubSectionHeading>
                    <PriceChangeWrapper>
                      <UpArrow />
                      <PriceText>2.1%</PriceText>
                    </PriceChangeWrapper>
                  </SubSectionSpan>
                </SubSectionContent>
              </MarketDataWrapper>
            </PriceDataWrapper>
          </AssetWrapper>
        </SectionWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Portfolio;
