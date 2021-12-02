import React from "react";
import axios from "axios";
import { CoinDescription, CoinSummary, InteractiveComponent } from "components/coin-page";
import { Wrapper, ContentWrapper } from "./Coin.styles";

export default class Coin extends React.Component {
    state = {
        durationSelected: "1d",
        isLoading: false,
        coin: null
    }

    getCoinData = async () => {
        this.setState({isLoading: true})
        const { data } = await axios(`https://api.coingecko.com/api/v3/coins/${this.props.match.params.id}?localization=false`)
        this.setState({
            isLoading: false,
            coin: data
        })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.getCoinData()
        }
      };

    componentDidMount() {
        this.getCoinData()
    }

    render() {
        return (
            <Wrapper>
                {this.state.coin && <ContentWrapper>
                    <CoinSummary coin={this.state.coin} />
                    <CoinDescription coin={this.state.coin} />
                    <InteractiveComponent coin={this.state.coin}/>
                </ContentWrapper>}
           </Wrapper>
        )
    }
}