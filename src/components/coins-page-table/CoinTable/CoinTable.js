import React, { useState, useEffect } from "react";
import { connect } from "react-redux"
import { getCoinsData } from "store/coins/action";
import { useSelector } from "react-redux"
import { getCoinsMarketCapAsc, getCoinsMarketCapDesc } from "store/coins"
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
import { LoadingTableRow } from "components/loading-animations";

const CoinTable = (props) => {
  const [sortBy, setSortBy] = useState("market_cap_desc") 
  const isLoading = useSelector(state => state.coins.isLoading)

  useEffect(() => {
    props.getCoinsData(1, sortBy);
  }, []);

  useEffect(() => {
    props.getCoinsData(1, sortBy)
  }, [sortBy])

  const setSortByMarketCap = () => {
    if (sortBy.includes("market_cap")){
      if (sortBy.includes("desc")) {
        setSortBy("market_cap_asc")
      }
      else{
        setSortBy("market_cap_desc")
      }
    }
  }

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
        {!isLoading && props.coins.map((coin) => (
          <TableRow key={coin.id} coin={coin} />
        )) }
      </Wrapper>
      {/* <Pagination>
        
    </Pagination> */}
    </OutsideWrapper>
  );
};

const mapStateToProps = (state) => ({
  coins: state.coins.data,
  isLoading: state.coins.isLoading,
  hasError: state.coins.hasError,
  // coinsByMarketCapAsc: getCoinsMarketCapAsc(state),
  // coinsByMarketCapDesc: getCoinsMarketCapDesc(state)
})

const mapDispatchToProps = {
  getCoinsData
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinTable);
