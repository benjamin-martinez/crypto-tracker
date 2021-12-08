import React, { useState, useEffect } from "react";
import { connect } from "react-redux"
import { getActiveCurrency } from "store/currencies";
import { useSelector } from "react-redux"
import { getFilteredCoins } from "store/coins";
import { getCoinsData, getCoinsDataByCategory } from "store/coins/action";
import { TableRow } from "components/coins-page-table";
import { CoinTableTitle } from "styles/Fonts";
import { TableFilters } from "components/coins-page-table";
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

  const activeCurrency = useSelector(getActiveCurrency)
  const activeCategory = useSelector(state => state.coins.activeCategory)

  useEffect(() => {
    props.getCoinsDataByCategory(activeCategory)
  }, []);

  useEffect(() => {
    props.getCoinsDataByCategory(activeCategory)
  }, [activeCurrency])

  useEffect(() => {
    props.getCoinsDataByCategory(activeCategory)
  }, [activeCategory])


  return (
    <OutsideWrapper>
      <TableFilters />
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
        {!props.isLoading && props.coins.map((coin) => (
          <TableRow key={coin.id} coin={coin} />
        ))}
      </Wrapper>
      {/* <Pagination>
        
    </Pagination> */}
    </OutsideWrapper>
  );
};

const mapStateToProps = (state) => ({
  coins: state.coins.data,
  isLoading: state.coins.isLoading,
  hasError: state.coins.hasError
})

const mapDispatchToProps = {
  getCoinsData,
  getCoinsDataByCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinTable);
