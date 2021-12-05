import React, { useState, useEffect } from "react";
import axios from "axios";
import { TableRow } from "components/coins-page-table";
import { CoinTableTitle } from "styles/Fonts";
import {
  OutsideWrapper,
  Wrapper,
  HeaderRow,
  THNum,
  THName,
  THPrice,
  TH1h,
  TH24h,
  TH7d,
  TH24VolMarCap,
  THCircTotSup,
  THLast7d,
} from "./CoinTable.styles";

const CoinTable = (props) => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const getTableData = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d"
      );
      setCoins(data);
      setIsLoading(false);
      setHasError(false);
    } catch (err) {
      setIsLoading(false);
      setHasError(true);
    }
  };

  useEffect(() => {
    getTableData();
  }, []);

  return (
    <OutsideWrapper>
      <Wrapper>
        <HeaderRow>
          <tr>
            <THNum>
              <CoinTableTitle>#</CoinTableTitle>
            </THNum>
            <THName>
              <CoinTableTitle>Name</CoinTableTitle>
            </THName>
            <THPrice>
              <CoinTableTitle>Price</CoinTableTitle>
            </THPrice>
            <TH1h>
              <CoinTableTitle>1h%</CoinTableTitle>
            </TH1h>
            <TH24h>
              <CoinTableTitle>24h%</CoinTableTitle>
            </TH24h>
            <TH7d>
              <CoinTableTitle>7d%</CoinTableTitle>
            </TH7d>
            <TH24VolMarCap>
              <CoinTableTitle>24h Volume/Market Cap</CoinTableTitle>
            </TH24VolMarCap>
            <THCircTotSup>
              <CoinTableTitle>Circulating/Total Supply</CoinTableTitle>
            </THCircTotSup>
            <THLast7d>
              <CoinTableTitle>Last 7d</CoinTableTitle>
            </THLast7d>
          </tr>
        </HeaderRow>
        {coins.map((coin) => (
          <TableRow key={coin.id} coin={coin} />
        ))}
      </Wrapper>
      {/* <Pagination>
        
    </Pagination> */}
    </OutsideWrapper>
  );
};

export default CoinTable;
