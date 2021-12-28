import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadHistoricalCoinData } from "store/portfolio/actions";
import { AddAssetModal, Asset } from "components/portfolio-page";
import { ButtonText, SectionHeading2 } from "styles/Fonts";
import {
  Wrapper,
  ContentWrapper,
  AddAssetButton,
  SectionWrapper,
} from "./Portfolio.styles";
import { getActiveCurrency } from "store/currencies";
import LoadingPortfolioAssets from "components/loading-animations/LoadingPortfolioAssets";

const Portfolio = () => {
  const dispatch = useDispatch();
  const [isModalActive, setIsModalActive] = useState(false);
  const { assets } = useSelector((state) => state.portfolio);
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

  useEffect(() => {
    dispatch(loadHistoricalCoinData(activeCurrency));
    //eslint-disable-next-line
  }, []);
  return (
    <Wrapper>
      <ContentWrapper>
        <AddAssetButton onClick={handleAddAssetClick}>
          <ButtonText>Add Asset</ButtonText>
        </AddAssetButton>
        <SectionWrapper>
          <SectionHeading2>Your Assets</SectionHeading2>
          {assets ? (
            assets.map(
              (asset) => asset.first && <Asset key={asset.id} asset={asset} />
            )
          ) : (
            <LoadingPortfolioAssets />
          )}
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
