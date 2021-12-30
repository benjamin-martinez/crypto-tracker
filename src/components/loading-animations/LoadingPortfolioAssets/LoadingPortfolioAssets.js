import { Wrapper, InnerDiv1, InnerDiv2, Layer, TopWrapper } from "./LoadingPortfolioAssets.styles";

const LoadingPortfolioAssets = () => {
  return (
    <Wrapper>
      <TopWrapper>
      <InnerDiv1 />
      <InnerDiv2>
        <Layer />
        <Layer />
      </InnerDiv2>
      </TopWrapper>
      <TopWrapper >
      <InnerDiv1 />
      <InnerDiv2>
        <Layer />
        <Layer />
      </InnerDiv2>
      </TopWrapper>
    </Wrapper>
  );
};

export default LoadingPortfolioAssets;
