import React from "react";
import axios from "axios";
import { convertDurationToUnix } from "utils";
import { DurationSelector, BackgroundChart } from "components/coin-page";
import { Wrapper } from "./BackgroundChartWrapper.styles";

export default class BackgroundChartWrapper extends React.Component {
    state = {
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
            const { data } = await axios(`https://api.coingecko.com/api/v3/coins/${this.props.coinId}/market_chart/range?vs_currency=usd&from=${durationStartDate}&to=${todaysDate}`);
            console.log(data)
                if (duration === 86400) {
                    this.setState({
                        tokenPriceHistory: data.prices,
                        activePrice: data.prices[data.prices.length-1][1],
                        isLoading: false
                    })
                } else {
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
        const tempArr = this.state.durations.map(dur => {
            return {
                ...dur,
                active: dur.length === duration.length 
            }
        })
        this.setState({durations: tempArr})
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.durations!== this.state.durations) {
            console.log(this.state.durations)
            this.state.durations.map(duration => duration.active && this.getChartData(convertDurationToUnix(duration.length)))
        }
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
                <DurationSelector durations={this.state.durations} handleDurationClick={this.handleDurationClick}/>
                <BackgroundChart coinPrices={this.state.tokenPriceHistory}/>
            </Wrapper>
        )
    }
}
