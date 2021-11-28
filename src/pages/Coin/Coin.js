import React from "react";
import axios from "axios";
import { CoinDescription, CoinSummary, InteractiveComponent } from "components/coin-page";
import { Wrapper, ContentWrapper, BackgroundChartWrapper } from "./Coin.styles";

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
            <Wrapper>
                {this.state.coin && <ContentWrapper>
                    <CoinSummary coin={this.state.coin} />
                    <CoinDescription coin={this.state.coin} />
                    <InteractiveComponent />
                    <BackgroundChartWrapper>

                    </BackgroundChartWrapper>
                </ContentWrapper>}
           </Wrapper>
        )
    }
}