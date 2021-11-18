import React from "react";
import axios from "axios";
import { BarChart, DurationSelector} from "components/coins-page-charts";
import { Wrapper, TextWrapper, SubWrapper } from "./BarChartWrapper.styles";
import { ChartHeaderText, ChartSubText } from "../../../styles/Fonts"

export default class BarChartWrapper extends React.Component {
    state = {
        activeToken: "BTC Volume",
        activePrice: "0.00",
        activeDate: "Nov 17, 2021",
        totalVolumes: [],
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
                    totalVolumes: data.total_volumes,
                    activePrice: data.total_volumes[data.total_volumes.length-1][1],
                    isLoading: false
                })
            } else 
                this.setState({
                    totalVolumes: data.total_volumes,
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
    convertPriceToBillions = (price) => {
             if(Math.round(price).toString().length >= 10) {
                return price.toString().slice(0,2) + "." + price.toString().slice(2,4) + " billion"
             }
             else if (Math.round(price).toString().length >= 7 && Math.round(price).toString().length < 10) {
                return price.toString().slice(0,2) + "." + price.toString().slice(2,4) + " million"
             }
             else
                return 
    }
    handleDurationClick = (duration) => {
        let tempArr = this.state.durations;
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
                    <ChartHeaderText>${this.convertPriceToBillions(this.state.activePrice)}</ChartHeaderText>
                    <ChartSubText>{this.state.activeDate}</ChartSubText>
                </TextWrapper>
                <DurationSelector durations={this.state.durations} handleDurationClick={this.handleDurationClick}/>
                <SubWrapper>
                    <BarChart duration={this.state.currentDurationUnix} totalVolumes={this.state.totalVolumes}/>
                </SubWrapper>
            </Wrapper>
        )
    }
}
