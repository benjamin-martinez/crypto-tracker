import React, { useState, useEffect} from "react";
import axios from "axios";
import { TableRow } from "components/coins-page-table";
import { CoinTableTitle } from "styles/Fonts";
import { OutsideWrapper, Wrapper, HeaderRow } from "./CoinTable.styles";

const CoinTable = (props) => {
    const [coins, setCoins] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [hasError, setHasError] = useState(false)

    const getTableData = async () => {
        setIsLoading(true)
        try {
            const { data } = await axios("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d");
            setCoins(data)
            setIsLoading(false)
            setHasError(false)
        }
        catch (err) {
            setIsLoading(false)
            setHasError(true)
        }
    }
    
    useEffect(() => {
        getTableData();
    }, [])

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
            {coins.map(coin => <TableRow key={coin.id} coin={coin} />)}
        </Wrapper>
        {/* <Pagination>
            
        </Pagination> */}
        </OutsideWrapper>
    )
    
}

export default CoinTable