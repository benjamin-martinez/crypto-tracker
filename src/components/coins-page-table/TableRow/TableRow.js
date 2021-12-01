import React from "react";
import { Link } from "react-router-dom";
import { Sparkline } from "components/coins-page-table";
import { Wrapper, TokenSpan, ChangeSpan, Icon, DoubleSpan, DoubleSpanTop } from "./TableRow.styles";
import { CoinTableRowText } from "styles/Fonts";
import { UpArrow, DownArrow } from "styles/arrows";
import { Slider, SliderWrapper } from "styles/sliders";
import { addDecimalsAndShorten, addCommas, formatLargeNumber, formatPercentage } from "utils/formatPrice";

const TableRow = (props) => {
    return (
        <Wrapper >
            <tr>
                <td><CoinTableRowText>{props.coin.market_cap_rank}</CoinTableRowText></td>
                <td><Link to={`/coin/${props.coin.id}`}><TokenSpan><Icon src={props.coin.image} /><CoinTableRowText>{props.coin.name} ({props.coin.symbol.toUpperCase()})</CoinTableRowText></TokenSpan></Link></td>
                <td><CoinTableRowText>{addCommas(props.coin.current_price)}</CoinTableRowText></td>
                <td><ChangeSpan>{props.coin.price_change_percentage_1h_in_currency > 0 ? <UpArrow /> : <DownArrow/>}<CoinTableRowText>{formatPercentage(props.coin.price_change_percentage_1h_in_currency)}</CoinTableRowText></ChangeSpan></td>
                <td><ChangeSpan>{props.coin.price_change_percentage_24h_in_currency > 0 ? <UpArrow /> : <DownArrow/>}<CoinTableRowText>{formatPercentage(props.coin.price_change_percentage_24h_in_currency)}</CoinTableRowText></ChangeSpan></td>
                <td><ChangeSpan>{props.coin.price_change_percentage_7d_in_currency > 0 ? <UpArrow /> : <DownArrow/>}<CoinTableRowText>{formatPercentage(props.coin.price_change_percentage_7d_in_currency)}</CoinTableRowText></ChangeSpan></td>
                <td>
                    <DoubleSpan>
                        <DoubleSpanTop>
                            <CoinTableRowText>{addDecimalsAndShorten(props.coin.total_volume)}</CoinTableRowText>
                            <CoinTableRowText>{addDecimalsAndShorten(props.coin.market_cap)}</CoinTableRowText>
                        </DoubleSpanTop>
                        <SliderWrapper height="8px" width="100%" background="white">
                            <Slider width={(props.coin.total_volume/props.coin.market_cap)*100} background="#aaaaaa" />
                        </SliderWrapper>
                    </DoubleSpan>
                </td>
                <td>
                    <DoubleSpan>
                        <DoubleSpanTop>
                            <CoinTableRowText>{formatLargeNumber(props.coin.circulating_supply)}</CoinTableRowText>
                            <CoinTableRowText>{props.coin.total_supply === null ? "∞" : formatLargeNumber(props.coin.total_supply)}</CoinTableRowText>
                        </DoubleSpanTop>
                        <SliderWrapper height="8px" width="100%" background="white">
                            <Slider width={(props.coin.circulating_supply/props.coin.total_supply)*100} background="#aaaaaa" />
                        </SliderWrapper>
                    </DoubleSpan>
                </td>
                <td><Sparkline prices={props.coin.sparkline_in_7d.price}/></td>
            </tr>
        </Wrapper>
    )
}

export default TableRow