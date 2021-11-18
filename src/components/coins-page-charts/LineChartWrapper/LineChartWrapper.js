import React from "react";
import axios from "axios";
import { LineChart, DurationSelector } from "components/coins-page-charts";
import { Wrapper, SubWrapper, TextWrapper } from "./LineChartWrapper.styles";
import { ChartHeaderText, ChartSubText } from "../../../styles/Fonts";

export default class LineChartWrapper extends React.Component {
    state = {
        activeToken: "BTC",
        activePrice: "0.00",
        activeDate: "Nov 17, 2021",
        coinPrices: [],
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
        this.setState({isLoading: true})
        try {
            const { data } = await axios(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=${durationStartDate}&to=${todaysDate}`);
            if (duration === 86400) {
                this.setState({
                    coinPrices: data.prices,
                    activePrice: data.prices[data.prices.length-1][1],
                    isLoading: false
                })
            } else 
                this.setState({
                    coinPrices: data.prices,
                    isLoading: false
                })
        }
        catch (err) {
            console.log(err)
        }
        
    }

    covertDurationToUnix = (length) => {
        if(length === "1d")
            return 86400
        else if (length === "1w")
            return 604800
        else if (length === "1m")
            return 2592000
        else if (length === "3m")
            return 7776000
        else if (length === "6m")
            return 15552000
        else if (length === "1y")
            return 31536000
    }

    handleDurationClick = (duration) => {
        let tempArr = this.state.durations
        tempArr.forEach(dur => {
            if (dur.length === duration.length) {
                if(!dur.active) {
                    dur.active = true
                    this.setState({currentDurationUnix: this.covertDurationToUnix(dur.length)});
                    this.getChartData(this.covertDurationToUnix(dur.length));
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
        this.getChartData(this.covertDurationToUnix("1d"));
        let date = new Date().toLocaleString(undefined, {
            month: "short", day: "numeric", year: "numeric"
        })
        this.setState({activeDate: date})
    }

    render() {
        return (
            <Wrapper>
                <TextWrapper>
                    <ChartSubText>{this.state.activeToken}</ChartSubText>
                    <ChartHeaderText>${parseFloat(this.state.activePrice).toFixed(2)}</ChartHeaderText>
                    <ChartSubText>{this.state.activeDate}</ChartSubText>
                </TextWrapper>
                <DurationSelector durations={this.state.durations} handleDurationClick={this.handleDurationClick}/>
                <SubWrapper>
                    <LineChart duration={this.state.currentDurationUnix} coinPrices={this.state.coinPrices}/>
                </SubWrapper>
            </Wrapper>
        )
    }
}