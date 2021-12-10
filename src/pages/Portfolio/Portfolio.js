import React, { useState, useEffect, useRef } from "react";
import { AddAssetModal, Asset } from "components/portfolio-page";
import { useSelector } from "react-redux"
import { ButtonText, SectionHeading2 } from "styles/Fonts";
import {
  Wrapper,
  ContentWrapper,
  AddAssetButton,
  SectionWrapper,
} from "./Portfolio.styles";

const Portfolio = () => {

  const [isModalActive, setIsModalActive] = useState(false)
  const assets = useSelector(state => state.portfolio.assets)

  const handleAddAssetClick = () => {
    setIsModalActive(!isModalActive)
  }

  const handleExitClick = () => {
    setIsModalActive(!isModalActive)
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          console.log("hit")
          setIsModalActive(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  return (
    <Wrapper>
      <ContentWrapper>
        <AddAssetButton onClick={handleAddAssetClick}>
          <ButtonText>Add Asset</ButtonText>
        </AddAssetButton>
        <SectionWrapper>
          <SectionHeading2>Your Statistics</SectionHeading2>
            {assets.map(asset => <Asset asset={asset}/>)}
        </SectionWrapper>
      </ContentWrapper>
      { isModalActive && <AddAssetModal handleExitClick={handleExitClick} innerRef={wrapperRef}/>}
    </Wrapper>
  );
};

export default Portfolio;
