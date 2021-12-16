import React from "react";
import {
  ChartSubText,
  PortfolioEntryTitle,
  ExternalLinkText,
  ChartHeaderText,
  ChartCategoryText,
  PortfolioEntryLabelText,
  PortfolioEntryText,
  CoinTableRowText,
} from "styles/Fonts";
import { useSelector } from "react-redux";
import { getActiveCurrency } from "store/currencies";
import { UpArrow, DownArrow } from "styles/arrows";
import { Slider, SliderWrapper } from "styles/sliders";
import {
  addCommas,
  fiveSigFigs,
  addDecimalsAndShorten,
  addCommasNoDec,
  formatPercentage,
  camelizeKeys,
} from "utils";
import {
  Wrapper,
  Title,
  SectionWrapper,
  CoinId,
  IdOuterWrapper,
  IdInnerWrapper,
  IconWrapper,
  Icon,
  CoinName,
  LinkWrapper,
  LinkIcon,
  PriceDetails,
  PriceDetailsInnerWrapper,
  PriceWrapper,
  PercentWrapper,
  ProfitWrapper,
  PriceText,
  StackIcon,
  PriceRangeDetailsWrapper,
  PriceRangeWrapper,
  PriceRangeTextWrapper,
  ATPriceWrapper,
  DoubleSpan,
  DoubleSpanTop,
  BulletPoint,
  MarketDetailsLineText,
  MarketDetailsInnerWrapper,
  MarketDetails,
  MarketDetailsLine,
  MarketDetailsTop,
  MarketDetailsMiddle,
  MarketDetailsBottom,
} from "./CoinSummary.styles";

const CoinSummary = (props) => {
  const { name: currencyName, symbol: currencySymbol } =
    useSelector(getActiveCurrency);

  const {
    image: coinImage,
    name: coinName,
    symbol: coinSymbol,
    links: coinLinks,
    market_data: coinMarketData,
  } = props.coin;
  
  const {
    current_price: currentPrice,
    price_change_percentage_24h: priceChangePercentage24hr,
    price_change_24h_in_currency: priceChange24hrInCurrency,
    ath,
    atl,
    ath_date: athDate,
    atl_date: atlDate,
    market_cap: marketCap,
    fully_diluted_valuation: fullyDilutedValuation,
    total_volume: totalVolume,
    circulating_supply: circulatingSupply,
    max_supply: maxSupply,
  } = coinMarketData;
  return (
    <Wrapper>
      <Title>
        <ChartSubText>Your Summary</ChartSubText>
      </Title>
      <SectionWrapper>
        <CoinId>
          <IdOuterWrapper>
            <IdInnerWrapper>
              <IconWrapper>
                <Icon src={coinImage.large} />
              </IconWrapper>
              <CoinName>
                <PortfolioEntryTitle>
                  {coinName}&nbsp;({coinSymbol.toUpperCase()})
                </PortfolioEntryTitle>
              </CoinName>
            </IdInnerWrapper>
          </IdOuterWrapper>
          <LinkWrapper>
            <LinkIcon src="icons/link.svg" />
            <ExternalLinkText href={coinLinks.homepage[0]} target="_blank">
              {coinLinks.homepage[0]}
            </ExternalLinkText>
          </LinkWrapper>
        </CoinId>
        <PriceDetails>
          <PriceDetailsInnerWrapper>
            <PriceWrapper>
              <ChartHeaderText>
                {currencySymbol + addCommas(currentPrice[currencyName])}
              </ChartHeaderText>
              <PercentWrapper>
                {priceChangePercentage24hr >= 0 ? <UpArrow /> : <DownArrow />}
                <PriceText price={priceChangePercentage24hr}>
                  {formatPercentage(priceChangePercentage24hr)}
                </PriceText>
              </PercentWrapper>
            </PriceWrapper>
            <ProfitWrapper>
              <ChartCategoryText>Profit: </ChartCategoryText>
              <PriceText price={priceChange24hrInCurrency[currencyName]}>
                {currencySymbol +
                  addDecimalsAndShorten(
                    priceChange24hrInCurrency[currencyName]
                  )}
              </PriceText>
            </ProfitWrapper>
            <StackIcon src="icons/stack.svg" />
            <PriceRangeDetailsWrapper>
              <PriceRangeWrapper>
                <UpArrow />
                <PriceRangeTextWrapper>
                  <ATPriceWrapper>
                    <PortfolioEntryLabelText>
                      All Time High:{" "}
                    </PortfolioEntryLabelText>
                    <PortfolioEntryText>
                      {currencySymbol +
                        addDecimalsAndShorten(ath[currencyName])}
                    </PortfolioEntryText>
                  </ATPriceWrapper>
                  <span>
                    <PortfolioEntryText>
                      {new Date(athDate[currencyName]).toLocaleString()}
                    </PortfolioEntryText>
                  </span>
                </PriceRangeTextWrapper>
              </PriceRangeWrapper>
              <PriceRangeWrapper>
                <DownArrow />
                <PriceRangeTextWrapper>
                  <ATPriceWrapper>
                    <PortfolioEntryLabelText>
                      All Time Low:{" "}
                    </PortfolioEntryLabelText>
                    <PortfolioEntryText>
                      {currencySymbol +
                        addDecimalsAndShorten(atl[currencyName])}
                    </PortfolioEntryText>
                  </ATPriceWrapper>
                  <span>
                    <PortfolioEntryText>
                      {new Date(atlDate[currencyName]).toLocaleString()}
                    </PortfolioEntryText>
                  </span>
                </PriceRangeTextWrapper>
              </PriceRangeWrapper>
            </PriceRangeDetailsWrapper>
          </PriceDetailsInnerWrapper>
        </PriceDetails>
        <MarketDetails>
          <MarketDetailsInnerWrapper>
            <MarketDetailsTop>
              <MarketDetailsLine>
                <BulletPoint>+</BulletPoint>
                <MarketDetailsLineText>
                  <PortfolioEntryLabelText>Market Cap:</PortfolioEntryLabelText>
                  <PortfolioEntryText>
                    {currencySymbol + addCommas(marketCap[currencyName])}
                  </PortfolioEntryText>
                </MarketDetailsLineText>
              </MarketDetailsLine>
              <MarketDetailsLine>
                <BulletPoint>+</BulletPoint>
                <MarketDetailsLineText>
                  <PortfolioEntryLabelText>
                    Fully Diluted Valuation:
                  </PortfolioEntryLabelText>
                  <PortfolioEntryText>
                    {currencySymbol +
                      addCommas(fullyDilutedValuation[currencyName])}
                  </PortfolioEntryText>
                </MarketDetailsLineText>
              </MarketDetailsLine>
              <MarketDetailsLine>
                <BulletPoint>+</BulletPoint>
                <MarketDetailsLineText>
                  <PortfolioEntryLabelText>Volume 24h:</PortfolioEntryLabelText>
                  <PortfolioEntryText>
                    {currencySymbol + addCommas(totalVolume[currencyName])}
                  </PortfolioEntryText>
                </MarketDetailsLineText>
              </MarketDetailsLine>
              <MarketDetailsLine>
                <BulletPoint>+</BulletPoint>
                <MarketDetailsLineText>
                  <PortfolioEntryLabelText>
                    Volume / Market:
                  </PortfolioEntryLabelText>
                  <PortfolioEntryText>
                    {fiveSigFigs(
                      totalVolume[currencyName] / marketCap[currencyName]
                    )}
                  </PortfolioEntryText>
                </MarketDetailsLineText>
              </MarketDetailsLine>
            </MarketDetailsTop>
            <MarketDetailsMiddle>
              <MarketDetailsLine>
                <BulletPoint>+</BulletPoint>
                <MarketDetailsLineText>
                  <PortfolioEntryLabelText>
                    Total Volume:
                  </PortfolioEntryLabelText>
                  <PortfolioEntryText>
                    {currencySymbol + addCommas(totalVolume[currencyName])}
                  </PortfolioEntryText>
                </MarketDetailsLineText>
              </MarketDetailsLine>
              <MarketDetailsLine>
                <BulletPoint>+</BulletPoint>
                <MarketDetailsLineText>
                  <PortfolioEntryLabelText>
                    Circulating Supply:
                  </PortfolioEntryLabelText>
                  <PortfolioEntryText>
                    {addCommasNoDec(circulatingSupply)}
                    &nbsp;{coinSymbol.toUpperCase()}
                  </PortfolioEntryText>
                </MarketDetailsLineText>
              </MarketDetailsLine>
              <MarketDetailsLine>
                <BulletPoint>+</BulletPoint>
                <MarketDetailsLineText>
                  <PortfolioEntryLabelText>Max Supply:</PortfolioEntryLabelText>
                  <PortfolioEntryText>
                    {addCommasNoDec(maxSupply)}&nbsp;
                    {coinSymbol.toUpperCase()}
                  </PortfolioEntryText>
                </MarketDetailsLineText>
              </MarketDetailsLine>
            </MarketDetailsMiddle>
            <MarketDetailsBottom>
              <DoubleSpan>
                <DoubleSpanTop>
                  <CoinTableRowText>200 m</CoinTableRowText>
                  <CoinTableRowText>201 m</CoinTableRowText>
                </DoubleSpanTop>
                <SliderWrapper height="8px" width="269px" background="white">
                  <Slider width="50" background="blue" />
                </SliderWrapper>
              </DoubleSpan>
            </MarketDetailsBottom>
          </MarketDetailsInnerWrapper>
        </MarketDetails>
      </SectionWrapper>
    </Wrapper>
  );
};

export default CoinSummary;
