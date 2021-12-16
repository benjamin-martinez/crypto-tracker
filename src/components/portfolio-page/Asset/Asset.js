import { PortfolioEntryTitle, SubSectionHeading } from "styles/Fonts";
import { UpArrow } from "styles/arrows";
import { themes } from "styles/colors";
import { Slider, SliderWrapper } from "styles/sliders";
import { addCommas } from "utils";
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
  PriceChangeWrapper,
} from "./Asset.styles";

const Asset = (props) => {
  return (
    props.asset && <Wrapper>
      <IdOuterWrapper>
        <IdInnerWrapper>
          <CoinImageWrapper>
            <CoinIcon src={props.asset.data.large} />
          </CoinImageWrapper>
          <PortfolioEntryTitle>{props.asset.data.name}&nbsp;({props.asset.data.symbol.toUpperCase()})</PortfolioEntryTitle>
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
              <PriceText>${addCommas(props.asset.marketData.prices[0][1])}</PriceText>
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
