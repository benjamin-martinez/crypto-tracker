import { PortfolioEntryTitle, SubSectionHeading } from "styles/Fonts";
import { DownArrow, UpArrow } from "styles/arrows";
import { themes } from "styles/colors";
import { Slider, SliderWrapper } from "styles/sliders";
import { addCommas, formatPercentage } from "utils";
import { useSelector } from "react-redux";
import { getActiveCurrency } from "store/currencies";
import {
  Wrapper,
  IdInnerWrapper,
  IdOuterWrapper,
  CoinIcon,
  CoinName,
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
  const activeCurrency = useSelector(getActiveCurrency);
  return (
    props.asset && (
      <Wrapper>
        <IdOuterWrapper>
          <IdInnerWrapper>
            <CoinImageWrapper>
              <CoinIcon src={props.asset.data.large} />
            </CoinImageWrapper>
            <CoinName>
              <PortfolioEntryTitle>
                {props.asset.data.name}&nbsp;(
                {props.asset.data.symbol.toUpperCase()})
              </PortfolioEntryTitle>
            </CoinName>
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
                <PriceText>
                  {activeCurrency.symbol + addCommas(props.asset.current_price)}
                </PriceText>
              </SubSectionSpan>
              <SubSectionSpan>
                <SubSectionHeading>Price change 24h</SubSectionHeading>
                <PriceChangeWrapper>
                  <UpArrow />
                  <PriceText>
                    {formatPercentage(props.asset.price_change_percentage_24h)}
                  </PriceText>
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
                  <PriceText>
                    {props.asset.max_supply
                      ? `${
                          addCommas(
                            props.asset.circulating_supply /
                              props.asset.max_supply
                          ) * 100
                        }%`
                      : "∞"}
                  </PriceText>
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
                  <PriceText>
                    {activeCurrency.symbol +
                      addCommas(props.asset.last * props.asset.amount)}
                  </PriceText>
                </PriceChangeWrapper>
              </SubSectionSpan>
              <SubSectionSpan>
                <SubSectionHeading>
                  Amount Price Change Since Purchase
                </SubSectionHeading>
                <PriceChangeWrapper>
                  {(props.asset.last - props.asset.first) * props.asset.amount >
                  0 ? (
                    <UpArrow />
                  ) : (
                    <DownArrow />
                  )}
                  <PriceText
                    isNegative={0 > props.asset.last - props.asset.first}
                  >
                    {activeCurrency.symbol +
                      addCommas(
                        (props.asset.last - props.asset.first) *
                          props.asset.amount
                      )}
                  </PriceText>
                </PriceChangeWrapper>
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
    )
  );
};

export default Asset;
