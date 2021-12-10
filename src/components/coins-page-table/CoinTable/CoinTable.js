import React, { useEffect } from "react";
import { connect } from "react-redux"
import { getActiveCurrency } from "store/currencies";
import { useSelector } from "react-redux"
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
import { LoadingTableRow } from "components/loading-animations";

const CoinTable = (props) => {
  const isLoading = useSelector(state => state.coins.isLoading)
  const loaders = Array.apply(null, Array(20)).map( function() {})
  const activeCurrency = useSelector(getActiveCurrency)
  const activeCategory = useSelector(state => state.coins.activeCategory)
  const activeDirection = useSelector(state => state.coins.activeDirection)
  const activePageNum = useSelector(state => state.coins.pageNum)
  const activeResultsPerPage = useSelector(state => state.coins.activeResultsPerPage)

  useEffect(() => {
    props.getCoinsDataByCategory(activeCategory)
  }, []);

  useEffect(() => {
    props.getCoinsDataByCategory(activeCategory)
  }, [activeCurrency])

  useEffect(() => {
    props.getCoinsDataByCategory(activeCategory)
  }, [activeCategory])

  useEffect(() => {
    props.getCoinsDataByCategory(activeCategory)
  }, [activeDirection])

  useEffect(() => {
    props.getCoinsDataByCategory(activeCategory)
  }, [activePageNum])

  useEffect(() => {
    props.getCoinsDataByCategory(activeCategory)
  }, [activeResultsPerPage])

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
        {!isLoading ? props.coins.map((coin) => (
          <TableRow key={coin.id} coin={coin} />
        )) : loaders.map(() => <LoadingTableRow />)}
      </Wrapper>
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
