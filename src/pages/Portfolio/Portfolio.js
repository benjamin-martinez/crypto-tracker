import React, { useState } from "react";
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
      { isModalActive && <AddAssetModal handleExitClick={handleExitClick}/>}
    </Wrapper>
  );
};

export default Portfolio;
