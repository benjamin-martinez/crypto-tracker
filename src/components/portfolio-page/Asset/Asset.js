import { PortfolioEntryTitle, SubSectionHeading } from "styles/Fonts";
import { UpArrow } from "styles/arrows";
import { themes } from "styles/colors";
import { Slider, SliderWrapper } from "styles/sliders";
import {
  Wrapper,
  IdInnerWrapper,
  IdOuterWrapper,
  CoinIcon,
  CoinImageWrapper,
  PriceDataWrapper,
  MarketDataWrapper,
  SubSectionHeadingWrapper,
  EditIconWrapper,
  EditIcon,
  SubSectionContent,
  SubSectionSpan,
  PriceText,
  PriceChangeWrapper
} from "./Asset.styles";

const Asset = (props) => {

  return (
    <Wrapper>
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
              <SubSectionHeading>Circ Supply vs Max Supply</SubSectionHeading>
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
              <SubSectionHeading>Circ Supply vs Max Supply</SubSectionHeading>
              <PriceChangeWrapper>
                <UpArrow />
                <PriceText>2.1%</PriceText>
              </PriceChangeWrapper>
            </SubSectionSpan>
          </SubSectionContent>
        </MarketDataWrapper>
      </PriceDataWrapper>
    </Wrapper>
  );
};

export default Asset;
