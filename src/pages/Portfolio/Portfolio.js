import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadHistoricalCoinData, loadCurrentCoinMarketData } from "store/portfolio/actions";
import { AddAssetModal, Asset } from "components/portfolio-page";
import { ButtonText, SectionHeading2 } from "styles/Fonts";
import {
  Wrapper,
  ContentWrapper,
  AddAssetButton,
  SectionWrapper,
} from "./Portfolio.styles";
import { getActiveCurrency } from "store/currencies";

const Portfolio = () => {
  const dispatch = useDispatch();
  const [isModalActive, setIsModalActive] = useState(false);
  const { assets, isLoadingSavedAssets } = useSelector((state) => state.portfolio);
  const activeCurrency = useSelector(getActiveCurrency);

  const handleAddAssetClick = () => {
    setIsModalActive(true);
  };

  const handleExitClick = () => {
    setIsModalActive(false);
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsModalActive(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  // useEffect(() => {
  //   dispatch(loadSavedCoins(activeCurrency))
  // }, [isLoadingSavedAssets])

  useEffect(() => {
    dispatch(loadHistoricalCoinData(activeCurrency));
    dispatch(loadCurrentCoinMarketData(activeCurrency));
    console.log(assets)
  }, []);

  return (
    <Wrapper>
      <ContentWrapper>
        <AddAssetButton onClick={handleAddAssetClick}>
          <ButtonText>Add Asset</ButtonText>
        </AddAssetButton>
        <SectionWrapper>
          <SectionHeading2>Your Assets</SectionHeading2>
          {assets &&
            assets.map((asset) => asset.marketData && <Asset key={asset.id} asset={asset} />)}
        </SectionWrapper>
      </ContentWrapper>
      {isModalActive && (
        <AddAssetModal
          handleExitClick={handleExitClick}
          innerRef={wrapperRef}
        />
      )}
    </Wrapper>
  );
};

export default Portfolio;
