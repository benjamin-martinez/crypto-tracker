import React from "react";
import { ChartSubText, PortfolioEntryTitle, ExternalLinkText, ChartHeaderText, ChartCategoryText, PortfolioEntryLabelText, PortfolioEntryText,
            CoinTableRowText } from "styles/Fonts";
import { UpArrow, DownArrow } from "styles/arrows";
import { Slider, SliderWrapper } from "styles/sliders";
import { addCommas, fiveSigFigs, addDecimalsAndShorten, addCommasNoDec, formatPercentage } from "utils";
import { Wrapper, Title, SectionWrapper, CoinId, IdOuterWrapper, IdInnerWrapper, IconWrapper, Icon, CoinName, LinkWrapper, LinkIcon,
            PriceDetails, PriceDetailsInnerWrapper, PriceWrapper, PercentWrapper, ProfitWrapper, PriceText, StackIcon, PriceRangeDetailsWrapper,
            PriceRangeWrapper, PriceRangeTextWrapper, ATPriceWrapper, DoubleSpan, DoubleSpanTop, BulletPoint, MarketDetailsLineText,
            MarketDetailsInnerWrapper, MarketDetails, MarketDetailsLine, MarketDetailsTop, MarketDetailsMiddle, MarketDetailsBottom } from "./CoinSummary.styles"

export default class CoinSummary extends React.Component {
    render() {
        return (
            <Wrapper>
                <Title><ChartSubText>Your Summary</ChartSubText></Title>
                <SectionWrapper>
                    <CoinId>
                        <IdOuterWrapper>
                            <IdInnerWrapper>
                                <IconWrapper>
                                    <Icon src={this.props.coin.image.large}/>
                                </IconWrapper>
                                <CoinName><PortfolioEntryTitle>{this.props.coin.name}&nbsp;({this.props.coin.symbol.toUpperCase()})</PortfolioEntryTitle></CoinName>
                            </IdInnerWrapper>
                        </IdOuterWrapper>
                        <LinkWrapper>
                            <LinkIcon src="icons/link.svg"/>
                            <ExternalLinkText href={this.props.coin.links.homepage[0]} target="_blank">{this.props.coin.links.homepage[0]}</ExternalLinkText>
                        </LinkWrapper>
                    </CoinId>
                    <PriceDetails>
                        <PriceDetailsInnerWrapper>
                        <PriceWrapper>
                            <ChartHeaderText>{addCommas(this.props.coin.market_data.current_price.usd)}</ChartHeaderText><PercentWrapper>{this.props.coin.market_data.price_change_percentage_24h >= 0 ? <UpArrow /> : <DownArrow />}<PriceText price={this.props.coin.market_data.price_change_percentage_24h}>{formatPercentage(this.props.coin.market_data.price_change_percentage_24h)}</PriceText></PercentWrapper>
                        </PriceWrapper>
                        <ProfitWrapper>
                            <ChartCategoryText>Profit: </ChartCategoryText><PriceText price={this.props.coin.market_data.price_change_24h_in_currency.usd}>{addDecimalsAndShorten(this.props.coin.market_data.price_change_24h_in_currency.usd)}</PriceText>
                        </ProfitWrapper>
                        <StackIcon src="icons/stack.svg"/>
                        <PriceRangeDetailsWrapper>
                            <PriceRangeWrapper>
                                <UpArrow />
                                <PriceRangeTextWrapper>
                                    <ATPriceWrapper><PortfolioEntryLabelText>All Time High: </PortfolioEntryLabelText><PortfolioEntryText>{addDecimalsAndShorten(this.props.coin.market_data.ath.usd)}</PortfolioEntryText></ATPriceWrapper>
                                    <span><PortfolioEntryText>{new Date (this.props.coin.market_data.ath_date.usd).toLocaleString()}</PortfolioEntryText></span>
                                </PriceRangeTextWrapper>
                            </PriceRangeWrapper>
                            <PriceRangeWrapper>
                                <DownArrow />
                                <PriceRangeTextWrapper>
                                <ATPriceWrapper><PortfolioEntryLabelText>All Time Low: </PortfolioEntryLabelText><PortfolioEntryText>{addDecimalsAndShorten(this.props.coin.market_data.atl.usd)}</PortfolioEntryText></ATPriceWrapper>
                                    <span><PortfolioEntryText>{new Date (this.props.coin.market_data.atl_date.usd).toLocaleString()}</PortfolioEntryText></span>
                                </PriceRangeTextWrapper>
                            </PriceRangeWrapper>
                        </PriceRangeDetailsWrapper>
                        </PriceDetailsInnerWrapper>
                    </PriceDetails>
                    <MarketDetails>
                        <MarketDetailsInnerWrapper>
                            <MarketDetailsTop>
                            <MarketDetailsLine><BulletPoint>+</BulletPoint><MarketDetailsLineText><PortfolioEntryLabelText>Market Cap:</PortfolioEntryLabelText><PortfolioEntryText>{addCommas(this.props.coin.market_data.market_cap.usd)}</PortfolioEntryText></MarketDetailsLineText></MarketDetailsLine>
                            <MarketDetailsLine><BulletPoint>+</BulletPoint><MarketDetailsLineText><PortfolioEntryLabelText>Fully Diluted Valuation:</PortfolioEntryLabelText><PortfolioEntryText>{addCommas(this.props.coin.market_data.fully_diluted_valuation.usd)}</PortfolioEntryText></MarketDetailsLineText></MarketDetailsLine>
                            <MarketDetailsLine><BulletPoint>+</BulletPoint><MarketDetailsLineText><PortfolioEntryLabelText>Volume 24h:</PortfolioEntryLabelText><PortfolioEntryText>{addCommas(this.props.coin.market_data.total_volume.usd)}</PortfolioEntryText></MarketDetailsLineText></MarketDetailsLine>
                            <MarketDetailsLine><BulletPoint>+</BulletPoint><MarketDetailsLineText><PortfolioEntryLabelText>Volume / Market:</PortfolioEntryLabelText><PortfolioEntryText>{fiveSigFigs(this.props.coin.market_data.total_volume.usd/this.props.coin.market_data.market_cap.usd)}</PortfolioEntryText></MarketDetailsLineText></MarketDetailsLine>
                            </MarketDetailsTop>
                            <MarketDetailsMiddle>
                            <MarketDetailsLine><BulletPoint>+</BulletPoint><MarketDetailsLineText><PortfolioEntryLabelText>Total Volume:</PortfolioEntryLabelText><PortfolioEntryText>{addCommas(this.props.coin.market_data.total_volume.usd)}</PortfolioEntryText></MarketDetailsLineText></MarketDetailsLine>
                            <MarketDetailsLine><BulletPoint>+</BulletPoint><MarketDetailsLineText><PortfolioEntryLabelText>Circulating Supply:</PortfolioEntryLabelText><PortfolioEntryText>{addCommasNoDec(this.props.coin.market_data.circulating_supply)}&nbsp;{this.props.coin.symbol.toUpperCase()}</PortfolioEntryText></MarketDetailsLineText></MarketDetailsLine>
                            <MarketDetailsLine><BulletPoint>+</BulletPoint><MarketDetailsLineText><PortfolioEntryLabelText>Max Supply:</PortfolioEntryLabelText><PortfolioEntryText>{addCommasNoDec(this.props.coin.market_data.max_supply)}&nbsp;{this.props.coin.symbol.toUpperCase()}</PortfolioEntryText></MarketDetailsLineText></MarketDetailsLine>
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
        )
    }
}