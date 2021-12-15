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

  console.log(props)
  return (
    <Wrapper>
      <IdOuterWrapper>
        <IdInnerWrapper>
          <CoinImageWrapper>
            <CoinIcon src={props.asset.image} />
          </CoinImageWrapper>
          <PortfolioEntryTitle>{props.asset.name}&nbsp;({props.asset.symbol.toUpperCase()})</PortfolioEntryTitle>
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
              <SubSectionHeading>Coin Amount:</SubSectionHeading>
              <PriceText>{props.asset.amount}</PriceText>
            </SubSectionSpan>
            <SubSectionSpan>
              <SubSectionHeading>Amount Value</SubSectionHeading>
              <PriceChangeWrapper>
                <UpArrow />
                <PriceText>2.1%</PriceText>
              </PriceChangeWrapper>
            </SubSectionSpan>
            <SubSectionSpan>
              <SubSectionHeading>Amount Price Change Since Purchase</SubSectionHeading>
              <PriceText>2%</PriceText>
            </SubSectionSpan>
            <SubSectionSpan>
              <SubSectionHeading>Purchase Date</SubSectionHeading>
              <PriceChangeWrapper>
                <PriceText>{props.asset.datePurchased}</PriceText>
              </PriceChangeWrapper>
            </SubSectionSpan>
          </SubSectionContent>
        </MarketDataWrapper>
      </PriceDataWrapper>
    </Wrapper>
  );
};

export default Asset;
