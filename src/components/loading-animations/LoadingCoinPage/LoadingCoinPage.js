import {
  Wrapper,
  TopWrapper,
  FirstWrapper,
  LoadingCoinId,
  LoadingPriceWrapper,
  LoadingCoinDescription,
  LoadingMarketDetailsWrapper,
} from "./LoadingCoinPage.styles";

const LoadingCoinPage = () => {
  return (
    <Wrapper>
      <TopWrapper>
        <FirstWrapper>
          <LoadingCoinId />
          <LoadingPriceWrapper />
        </FirstWrapper>
        <LoadingMarketDetailsWrapper />
      </TopWrapper>
      <LoadingCoinDescription />
    </Wrapper>
  );
};

export default LoadingCoinPage;
