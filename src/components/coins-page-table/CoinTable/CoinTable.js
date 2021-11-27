import React from "react";
import axios from "axios";
import { TableRow } from "components/coins-page-table";
import { OutsideWrapper, Wrapper, HeaderRow } from "./CoinTable.styles";
import { CoinTableTitle } from "styles/Fonts";

export default class CoinTable extends React.Component {
    state = {
        coins: [],
        isLoading: false,
        hasError: false
    }

    getTableData = async () => {
        this.setState({isLoading: true})
        try {
            const { data } = await axios("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d");
            console.log(data)
            this.setState({
                coins: data,
                isLoading: false,
                hasError: false
            })
        }
        catch (err) {
            this.setState({
                isLoading: false,
                hasError: true
            })
        }
    }
    
    componentDidMount() {
        this.getTableData();
    }

    render() {
        return (
            <OutsideWrapper>
            <Wrapper>
                <col style={{width:"5.3%"}} />
	            <col style={{width:"18.4%"}} />
                <col style={{width:"7.9%"}} />
                <col style={{width:"7.4%"}} />
                <col style={{width:"8.3%"}} />
                <col style={{width:"7.5%"}} />
                <col style={{width:"18.7%"}} />
                <col style={{width:"18.6%"}} />
                <col style={{width:"8.6%"}} />
                <HeaderRow>
                    <tr>
                        <th><CoinTableTitle>#</CoinTableTitle></th>
                        <th><CoinTableTitle>Name</CoinTableTitle></th>
                        <th><CoinTableTitle>Price</CoinTableTitle></th>
                        <th><CoinTableTitle>1h%</CoinTableTitle></th>
                        <th><CoinTableTitle>24h%</CoinTableTitle></th>
                        <th><CoinTableTitle>7d%</CoinTableTitle></th>
                        <th><CoinTableTitle>24h Volume/Market Cap</CoinTableTitle></th>
                        <th><CoinTableTitle>Circulating/Total Supply</CoinTableTitle></th>
                        <th><CoinTableTitle>Last 7d</CoinTableTitle></th>
                    </tr>
                </HeaderRow>
                {this.state.coins.map(coin => <TableRow key={coin.id} coin={coin} />)}
            </Wrapper>
            {/* <Pagination>
                
            </Pagination> */}
            </OutsideWrapper>
        )
    }
}