import React from "react";
import { Link } from "react-router-dom";
import { Sparkline } from "components/coins-page-table";
import { Wrapper, TokenSpan, ChangeSpan, Icon, DoubleSpan, DoubleSpanTop } from "./TableRow.styles";
import { CoinTableRowText } from "styles/Fonts";
import { UpArrow, DownArrow } from "styles/arrows";
import { Slider, SliderWrapper } from "styles/sliders";
import { addDecimalsAndShorten, addCommas, formatLargeNumber, formatPercentage } from "utils/formatPrice";

export default class TableRow extends React.Component {

    render() {
        return (
            <Wrapper >
                <tr>
                    <td><CoinTableRowText>{this.props.coin.market_cap_rank}</CoinTableRowText></td>
                    <td><Link to={`/coin/${this.props.coin.id}`}><TokenSpan><Icon src={this.props.coin.image} /><CoinTableRowText>{this.props.coin.name} ({this.props.coin.symbol.toUpperCase()})</CoinTableRowText></TokenSpan></Link></td>
                    <td><CoinTableRowText>{addCommas(this.props.coin.current_price)}</CoinTableRowText></td>
                    <td><ChangeSpan>{this.props.coin.price_change_percentage_1h_in_currency > 0 ? <UpArrow /> : <DownArrow/>}<CoinTableRowText>{formatPercentage(this.props.coin.price_change_percentage_1h_in_currency)}</CoinTableRowText></ChangeSpan></td>
                    <td><ChangeSpan>{this.props.coin.price_change_percentage_24h_in_currency > 0 ? <UpArrow /> : <DownArrow/>}<CoinTableRowText>{formatPercentage(this.props.coin.price_change_percentage_24h_in_currency)}</CoinTableRowText></ChangeSpan></td>
                    <td><ChangeSpan>{this.props.coin.price_change_percentage_7d_in_currency > 0 ? <UpArrow /> : <DownArrow/>}<CoinTableRowText>{formatPercentage(this.props.coin.price_change_percentage_7d_in_currency)}</CoinTableRowText></ChangeSpan></td>
                    <td>
                        <DoubleSpan>
                            <DoubleSpanTop>
                                <CoinTableRowText>{addDecimalsAndShorten(this.props.coin.total_volume)}</CoinTableRowText>
                                <CoinTableRowText>{addDecimalsAndShorten(this.props.coin.market_cap)}</CoinTableRowText>
                            </DoubleSpanTop>
                            <SliderWrapper height="8px" width="100%" background="white">
                                <Slider width={(this.props.coin.total_volume/this.props.coin.market_cap)*100} background="#aaaaaa" />
                            </SliderWrapper>
                        </DoubleSpan>
                    </td>
                    <td>
                        <DoubleSpan>
                            <DoubleSpanTop>
                                <CoinTableRowText>{formatLargeNumber(this.props.coin.circulating_supply)}</CoinTableRowText>
                                <CoinTableRowText>{this.props.coin.total_supply === null ? "∞" : formatLargeNumber(this.props.coin.total_supply)}</CoinTableRowText>
                            </DoubleSpanTop>
                            <SliderWrapper height="8px" width="100%" background="white">
                                <Slider width={(this.props.coin.circulating_supply/this.props.coin.total_supply)*100} background="#aaaaaa" />
                            </SliderWrapper>
                        </DoubleSpan>
                    </td>
                    <td><Sparkline prices={this.props.coin.sparkline_in_7d.price}/></td>
                </tr>
            </Wrapper>
        )
    }
}
