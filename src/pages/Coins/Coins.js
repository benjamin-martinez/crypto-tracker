import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ChartWrapper } from "components/coins-page-charts";
import { useWindowSize } from "hooks";
import { SectionHeading } from "styles/Fonts";
import {
  setActiveChartOption,
  setActivePriceChartDuration,
  setActiveVolumeChartDuration,
  getChartData,
} from "store/charts/action";
import { getActiveCurrency } from "store/currencies";
import {
  Wrapper,
  Dropdown,
  ChartsWrapper,
  MobileChartsWrapper,
  ContentWrapper,
  SectionWrapper,
  HeadingDropdown,
  DropdownSelectionWrapper,
  HeadingDiv,
  CoinTableWrapper,
} from "./Coins.styles";
import { CoinTable } from "components/coins-page-table";
import { LeftArrow, RightArrow, SmallDownNuetralArrow } from "styles/arrows";

const Coins = () => {
  const { width: screenWidth } = useWindowSize()
  const dispatch = useDispatch();
  const activeCurrency = useSelector(getActiveCurrency);
  //Data fetching for Charts
  //token data, ie which token we lookin at?
  const chartOptions = useSelector((state) => state.charts.chartOptions);
  const activeChartOption = useSelector(
    (state) => state.charts.activeChartOption
  );
  const [dropdownActive, setDropdownActive] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setDropdownActive(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const { activePriceChartDuration, priceChartHistory, priceChartIsLoading } =
    useSelector((state) => state.charts);

  useEffect(() => {
    dispatch(getChartData(activeCurrency, activePriceChartDuration, "price"));
  }, [activePriceChartDuration, activeCurrency, activeChartOption]);

  useEffect(() => {
    dispatch(getChartData(activeCurrency, activeVolumeChartDuration, "price"));
  }, []);

  const {
    activeVolumeChartDuration,
    volumeChartHistory,
    volumeChartIsLoading,
  } = useSelector((state) => state.charts);

  useEffect(() => {
    dispatch(getChartData(activeCurrency, activeVolumeChartDuration, "volume"));
  }, [activeVolumeChartDuration, activeCurrency, activeChartOption]);

  useEffect(() => {
    dispatch(getChartData(activeCurrency, activeVolumeChartDuration, "volume"));
  }, []);

  const hasError = useSelector((state) => state.charts.hasError);

  const handleActivateDropdownClick = () => {
    setDropdownActive(!dropdownActive);
  };

  const handleChartDropdownSelectionClick = (selection) => {
    dispatch(setActiveChartOption(selection));
  };

  const [fadeLeft, setFadeLeft] = useState(false);
  const [isPriceVisible, setIsPriceVisible] = useState(true);
  const [isVolumeVisible, setIsVolumeVisible] = useState(false);
  const handleRightClick = () => {
    setFadeLeft(true);
    setIsPriceVisible(!isPriceVisible);
    setIsVolumeVisible(!isVolumeVisible);
  };

  const handleLeftClick = () => {
    setFadeLeft(true);
    setIsPriceVisible(!isPriceVisible);
    setIsVolumeVisible(!isVolumeVisible);
  };

  return (
    <Wrapper>
      <ContentWrapper>
        <SectionWrapper>
          <HeadingDiv>
            <HeadingDropdown onClick={handleActivateDropdownClick}>
              <SectionHeading>
                {activeChartOption.name}&nbsp;Overview
              </SectionHeading>
              <SmallDownNuetralArrow />
              {dropdownActive && (
                <Dropdown ref={wrapperRef}>
                  {chartOptions.map((option) => (
                    <DropdownSelectionWrapper
                      key={option.id}
                      onClick={() => handleChartDropdownSelectionClick(option)}
                    >
                      {option.name}
                    </DropdownSelectionWrapper>
                  ))}
                </Dropdown>
              )}
            </HeadingDropdown>
          </HeadingDiv>
          <ChartsWrapper screenWidth={screenWidth}>
            <LeftArrow onClick={handleLeftClick} />
            <ChartWrapper
              chartType="price"
              activeChartOption={activeChartOption}
              activeChartDuration={activePriceChartDuration}
              setActiveChartDuration={setActivePriceChartDuration}
              chartHistory={priceChartHistory}
              isLoading={priceChartIsLoading}
              hasError={hasError}
              screenWidth={screenWidth}
              visible={isPriceVisible}
            />
            <ChartWrapper
              chartType="volume"
              activeChartOption={activeChartOption}
              activeChartDuration={activeVolumeChartDuration}
              setActiveChartDuration={setActiveVolumeChartDuration}
              chartHistory={volumeChartHistory}
              isLoading={volumeChartIsLoading}
              hasError={hasError}
              screenWidth={screenWidth}
              visible={isVolumeVisible}
            />
            <RightArrow onClick={handleRightClick} />
          </ChartsWrapper>
        </SectionWrapper>
        <SectionWrapper>
          <HeadingDiv></HeadingDiv>
          <CoinTableWrapper>
            <CoinTable />
          </CoinTableWrapper>
        </SectionWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Coins;
