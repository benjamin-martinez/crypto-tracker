import React from "react";
import axios from "axios";
import { BarChart, DurationSelector, LineChart} from "components/coins-page-charts";
import { addCommas, addDecimalsAndShorten, convertDurationToUnix } from "utils";
import { Wrapper, TextWrapper, SubWrapper } from "./ChartWrapper.styles";
import { ChartHeaderText, ChartSubText } from "../../../styles/Fonts"

export default class ChartWrapper extends React.Component {
    state = {
        activeToken: "BTC",
        activePrice: "0.00",
        activeDate: "Nov 17, 2021",
        tokenPriceHistory: [],
        durations: [
            {
                length: "1d",
                active: true
            },
            {
                length: "1w",
                active: false
            },
            {
                length: "1m",
                active: false
            },
            {
                length: "3m",
                active: false
            },
            {
                length: "6m",
                active: false
            },
            {
                length: "1y",
                active: false
            }
        ]
    }
    getChartData = async (duration) => {
        const todaysDate = new Date() / 1000;
        const durationStartDate = new Date()/1000 - duration;
        this.setState({ isLoading: true })
        try {
            const { data } = await axios(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=${durationStartDate}&to=${todaysDate}`);
            if (this.props.chartType === "volume") {
                if (duration === 86400) {
                    this.setState({
                        tokenPriceHistory: data.total_volumes,
                        activePrice: data.total_volumes[data.total_volumes.length-1][1],
                        isLoading: false
                    })
                } else 
                    this.setState({
                        tokenPriceHistory: data.total_volumes,
                        isLoading: false
                    })
            } else if (this.props.chartType === "price") {
                if (duration === 86400) {
                    this.setState({
                        tokenPriceHistory: data.prices,
                        activePrice: data.prices[data.prices.length-1][1],
                        isLoading: false
                    })
                } else 
                    this.setState({
                        tokenPriceHistory: data.prices,
                        isLoading: false
                    })
            }
        }
        catch (err) {
            console.log(err)
        }
    }
    handleDurationClick = (duration) => {
        let tempArr = this.state.durations;
        tempArr.forEach(dur => {
            if (dur.length === duration.length) {
                if(!dur.active) {
                    dur.active = true
                    this.setState({currentDurationUnix: convertDurationToUnix(dur.length)});
                    this.getChartData(convertDurationToUnix(dur.length));
                }   
            } else {
                if(dur.active) {
                    dur.active = false
                }
            }
        })
        this.setState({durations: tempArr})
    }
    componentDidMount() {
        this.getChartData(convertDurationToUnix("1d"));
        let date = new Date().toLocaleString(undefined, {
            month: "short", day: "numeric", year: "numeric"
        })
        this.setState({activeDate: date})
    }
    render() {
        return (
            <Wrapper>
                <TextWrapper>
                    <ChartSubText>{this.state.activeToken} {this.props.chartType === "volume" && "Volume"}</ChartSubText>
                    <ChartHeaderText>{this.props.chartType === "volume" ? addDecimalsAndShorten(this.state.activePrice) : addCommas(this.state.activePrice)}</ChartHeaderText>
                    <ChartSubText>{this.state.activeDate}</ChartSubText>
                </TextWrapper>
                <DurationSelector durations={this.state.durations} handleDurationClick={this.handleDurationClick}/>
                <SubWrapper>
                    {this.props.chartType === "volume" ? <BarChart totalVolumes={this.state.tokenPriceHistory} /> : <LineChart coinPrices={this.state.tokenPriceHistory}/>}
                </SubWrapper>
            </Wrapper>
        )
    }
}
