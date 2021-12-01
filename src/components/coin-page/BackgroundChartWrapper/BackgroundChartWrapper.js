import React, { useState, useEffect } from "react";
import axios from "axios";
import { convertDurationToUnix } from "utils";
import { DurationSelector, BackgroundChart } from "components/coin-page";
import { Wrapper } from "./BackgroundChartWrapper.styles";

const BackgroundChartWrapper = (props) => {
    const [tokenPriceHistory, setTokenPriceHistory] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [hasError, setHasError] = useState(false)
    const [durations, setDurations] = useState(
        [
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
    )
    const getChartData = async (duration) => {
        const todaysDate = new Date() / 1000;
        const durationStartDate = new Date()/1000 - duration;
        setIsLoading(true)
        try {
            const { data } = await axios(`https://api.coingecko.com/api/v3/coins/${props.coinId}/market_chart/range?vs_currency=usd&from=${durationStartDate}&to=${todaysDate}`);
            console.log(data)
                if (duration === 86400) {
                    setTokenPriceHistory(data.prices)
                    setIsLoading(false)
                    setHasError(false)
                } else {
                    setTokenPriceHistory(data.prices)
                    setIsLoading(false)
                    setHasError(false)
                }
            }
        catch (err) {
            console.log(err)
            setHasError(true)
        }
    }
    const handleDurationClick = (duration) => {
        const tempArr = durations.map(dur => {
            return {
                ...dur,
                active: dur.length === duration.length 
            }
        })
        setDurations(tempArr)
    }

    useEffect(() => {
        durations.map(duration => duration.active && getChartData(convertDurationToUnix(duration.length)))
        //eslint-disable-next-line
    }, [durations])

    useEffect(() => {
        getChartData(convertDurationToUnix("1d"));
        //eslint-disable-next-line
    }, [])
    return (
        <Wrapper>
            <DurationSelector durations={durations} handleDurationClick={handleDurationClick}/>
            <BackgroundChart coinPrices={tokenPriceHistory}/>
        </Wrapper>
    )
}

export default BackgroundChartWrapper