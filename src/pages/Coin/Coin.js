import axios from "axios";
import React from "react";
import { DownArrow, UpArrow } from "styles/arrows";
import { ChartSubText, ExternalLinkText, PortfolioEntryText, PortfolioEntryLabelText, PortfolioEntryTitle, SectionHeading, ChartHeaderText, ChartCategoryText, CoinTableRowText } from "styles/Fonts";
import { SliderWrapper, Slider } from "styles/sliders";
import { formatPercentage, addDecimalsAndShorten, addCommas, addCommasNoDec, fiveSigFigs } from "utils/formatPrice";
import { Wrapper, ContentWrapper, Summary, Title, SectionWrapper, CoinId, IdOuterWrapper, IdInnerWrapper, IconWrapper, Icon, 
    CoinName, LinkWrapper, ProfitWrapper, LinkIcon, PriceDetails, PriceDetailsInnerWrapper, PriceWrapper, PercentWrapper, PriceText, 
    StackIcon, PriceRangeDetailsWrapper, PriceRangeWrapper, PriceRangeTextWrapper, ATPriceWrapper, MarketDetails, MarketDetailsInnerWrapper, 
    MarketDetailsTop, MarketDetailsLine, BulletPoint, MarketDetailsLineText, MarketDetailsMiddle, MarketDetailsBottom, DoubleSpan, 
    DoubleSpanTop, Description, TextWrapper, InnerTextWrapper, DescText, LinksWrapper, CopyIcon, InteractiveWrapper, Form, ButtonSpan,
    RadioButton, ButtonLabel, ConversionArrowsIcon, ConversionWrapper, CoinInput, Name, InputPrice, BackgroundChartWrapper } from "./Coin.styles";

export default class Coin extends React.Component {
    state = {
        durationSelected: "1d",
        isLoading: false,
        coin: null
    }

    getCoinData = async () => {
        this.setState({isLoading: true})
        const { data } = await axios(`https://api.coingecko.com/api/v3/coins/${this.props.match.params.id}?localization=false`)
        console.log(data)
        this.setState({
            isLoading: false,
            coin: data
        })
    }

    componentDidMount() {
        console.log(this.props.match.params.id)
        this.getCoinData()
    }

    render() {
        return (
            <Wrapper>{this.state.coin &&
                <ContentWrapper>
                    <Summary>
                        <Title><ChartSubText>Your Summary</ChartSubText></Title>
                        <SectionWrapper>
                            <CoinId>
                                <IdOuterWrapper>
                                    <IdInnerWrapper>
                                        <IconWrapper>
                                            <Icon src={this.state.coin.image.large}/>
                                        </IconWrapper>
                                        <CoinName><PortfolioEntryTitle>{this.state.coin.name}&nbsp;({this.state.coin.symbol.toUpperCase()})</PortfolioEntryTitle></CoinName>
                                    </IdInnerWrapper>
                                </IdOuterWrapper>
                                <LinkWrapper>
                                    <LinkIcon src="icons/link.svg"/>
                                    <ExternalLinkText>{this.state.coin.links.homepage[0]}</ExternalLinkText>
                                </LinkWrapper>
                            </CoinId>
                            <PriceDetails>
                                <PriceDetailsInnerWrapper>
                                <PriceWrapper>
                                    <ChartHeaderText>{addCommas(this.state.coin.market_data.current_price.usd)}</ChartHeaderText><PercentWrapper>{this.state.coin.market_data.price_change_percentage_24h >= 0 ? <UpArrow /> : <DownArrow />}<PriceText price={this.state.coin.market_data.price_change_percentage_24h}>{formatPercentage(this.state.coin.market_data.price_change_percentage_24h)}</PriceText></PercentWrapper>
                                </PriceWrapper>
                                <ProfitWrapper>
                                    <ChartCategoryText>Profit: </ChartCategoryText><PriceText price={this.state.coin.market_data.price_change_24h_in_currency.usd}>{addDecimalsAndShorten(this.state.coin.market_data.price_change_24h_in_currency.usd)}</PriceText>
                                </ProfitWrapper>
                                <StackIcon src="icons/stack.svg"/>
                                <PriceRangeDetailsWrapper>
                                    <PriceRangeWrapper>
                                        <UpArrow />
                                        <PriceRangeTextWrapper>
                                            <ATPriceWrapper><PortfolioEntryLabelText>All Time High: </PortfolioEntryLabelText><PortfolioEntryText>{addDecimalsAndShorten(this.state.coin.market_data.ath.usd)}</PortfolioEntryText></ATPriceWrapper>
                                            <span><PortfolioEntryText>{this.state.coin.market_data.ath_date.usd}</PortfolioEntryText></span>
                                        </PriceRangeTextWrapper>
                                    </PriceRangeWrapper>
                                    <PriceRangeWrapper>
                                        <DownArrow />
                                        <PriceRangeTextWrapper>
                                        <ATPriceWrapper><PortfolioEntryLabelText>All Time Low: </PortfolioEntryLabelText><PortfolioEntryText>{addDecimalsAndShorten(this.state.coin.market_data.atl.usd)}</PortfolioEntryText></ATPriceWrapper>
                                            <span><PortfolioEntryText>{this.state.coin.market_data.atl_date.usd}</PortfolioEntryText></span>
                                        </PriceRangeTextWrapper>
                                    </PriceRangeWrapper>
                                </PriceRangeDetailsWrapper>
                                </PriceDetailsInnerWrapper>
                            </PriceDetails>
                            <MarketDetails>
                                <MarketDetailsInnerWrapper>
                                    <MarketDetailsTop>
                                    <MarketDetailsLine><BulletPoint>+</BulletPoint><MarketDetailsLineText><PortfolioEntryLabelText>Market Cap:</PortfolioEntryLabelText><PortfolioEntryText>{addCommas(this.state.coin.market_data.market_cap.usd)}</PortfolioEntryText></MarketDetailsLineText></MarketDetailsLine>
                                    <MarketDetailsLine><BulletPoint>+</BulletPoint><MarketDetailsLineText><PortfolioEntryLabelText>Fully Diluted Valuation:</PortfolioEntryLabelText><PortfolioEntryText>{addCommas(this.state.coin.market_data.fully_diluted_valuation.usd)}</PortfolioEntryText></MarketDetailsLineText></MarketDetailsLine>
                                    <MarketDetailsLine><BulletPoint>+</BulletPoint><MarketDetailsLineText><PortfolioEntryLabelText>Volume 24h:</PortfolioEntryLabelText><PortfolioEntryText>{addCommas(this.state.coin.market_data.total_volume.usd)}</PortfolioEntryText></MarketDetailsLineText></MarketDetailsLine>
                                    <MarketDetailsLine><BulletPoint>+</BulletPoint><MarketDetailsLineText><PortfolioEntryLabelText>Volume / Market:</PortfolioEntryLabelText><PortfolioEntryText>{fiveSigFigs(this.state.coin.market_data.total_volume.usd/this.state.coin.market_data.market_cap.usd)}</PortfolioEntryText></MarketDetailsLineText></MarketDetailsLine>
                                    </MarketDetailsTop>
                                    <MarketDetailsMiddle>
                                    <MarketDetailsLine><BulletPoint>+</BulletPoint><MarketDetailsLineText><PortfolioEntryLabelText>Total Volume:</PortfolioEntryLabelText><PortfolioEntryText>{addCommas(this.state.coin.market_data.total_volume.usd)}</PortfolioEntryText></MarketDetailsLineText></MarketDetailsLine>
                                    <MarketDetailsLine><BulletPoint>+</BulletPoint><MarketDetailsLineText><PortfolioEntryLabelText>Circulating Supply:</PortfolioEntryLabelText><PortfolioEntryText>{addCommasNoDec(this.state.coin.market_data.circulating_supply)}&nbsp;{this.state.coin.symbol.toUpperCase()}</PortfolioEntryText></MarketDetailsLineText></MarketDetailsLine>
                                    <MarketDetailsLine><BulletPoint>+</BulletPoint><MarketDetailsLineText><PortfolioEntryLabelText>Max Supply:</PortfolioEntryLabelText><PortfolioEntryText>{addCommasNoDec(this.state.coin.market_data.max_supply)}&nbsp;{this.state.coin.symbol.toUpperCase()}</PortfolioEntryText></MarketDetailsLineText></MarketDetailsLine>
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
                    </Summary>
                    <Description>
                        <Title><ChartSubText>Description</ChartSubText></Title>
                        <TextWrapper>
                            <InnerTextWrapper>
                                <StackIcon src="icons/stack.svg" />
                                <DescText><div dangerouslySetInnerHTML={{__html:this.state.coin.description.en}}/></DescText>
                            </InnerTextWrapper>
                        </TextWrapper>
                        <LinksWrapper>
                            <LinkWrapper>
                                <LinkIcon src="icons/link.svg"/>
                                <ExternalLinkText>{this.state.coin.links.blockchain_site[0]}</ExternalLinkText>
                                <CopyIcon src="icons/copy.svg"/>
                            </LinkWrapper>
                            <LinkWrapper>
                                <LinkIcon src="icons/link.svg"/>
                                <ExternalLinkText>{this.state.coin.links.blockchain_site[1]}</ExternalLinkText>
                                <CopyIcon src="icons/copy.svg"/>
                            </LinkWrapper>
                            <LinkWrapper>
                                <LinkIcon src="icons/link.svg"/>
                                <ExternalLinkText>{this.state.coin.links.blockchain_site[2]}</ExternalLinkText>
                                <CopyIcon src="icons/copy.svg"/>
                            </LinkWrapper>
                        </LinksWrapper>
                    </Description>
                    <InteractiveWrapper>
                        <Form>
                            <ButtonSpan>
                                <RadioButton type="radio" id="chart-length" />
                                <ButtonLabel for="chart-length">1d</ButtonLabel>
                            </ButtonSpan>
                            <ButtonSpan>
                                <RadioButton type="radio" id="chart-length" />
                                <ButtonLabel for="chart-length">1w</ButtonLabel>
                            </ButtonSpan>
                            <ButtonSpan>
                                <RadioButton type="radio" id="chart-length" />
                                <ButtonLabel for="chart-length">1m</ButtonLabel>
                            </ButtonSpan>
                            <ButtonSpan>
                                <RadioButton type="radio" id="chart-length" />
                                <ButtonLabel for="chart-length">3m</ButtonLabel>
                            </ButtonSpan>
                            <ButtonSpan>
                                <RadioButton type="radio" id="chart-length" />
                                <ButtonLabel for="chart-length">1y</ButtonLabel>
                            </ButtonSpan>
                            <ButtonSpan>
                                <RadioButton type="radio" id="chart-length" isSelected={true}/>
                                <ButtonLabel for="chart-length">Max</ButtonLabel>
                            </ButtonSpan>
                        </Form>
                        <ConversionWrapper>
                            <CoinInput>
                                <Name><SectionHeading>BTC</SectionHeading></Name>
                                <InputPrice>$56.66</InputPrice>
                            </CoinInput>
                            <ConversionArrowsIcon src="icons/conversion-arrows.svg"/>
                            <CoinInput>
                                <Name><SectionHeading>USD</SectionHeading></Name>
                                <InputPrice>B0.06</InputPrice>
                            </CoinInput>
                        </ConversionWrapper>
                    </InteractiveWrapper>
                    <BackgroundChartWrapper>

                    </BackgroundChartWrapper>
                </ContentWrapper>
    }</Wrapper>
        )
    }
}