
import { SearchAsset } from "components/portfolio-page"
import {
  ModalTitleText,
  CoinTableRowText,
  ModalButtonText,
} from "styles/Fonts";
import {
  BackgroundWrapper,
  Wrapper,
  ContentWrapper,
  IdInnerWrapper,
  IdOuterWrapper,
  CoinIcon,
  CoinImageWrapper,
  ModalTitleWrapper,
  ModalContentWrapper,
  ModalButtonsWrapper,
  ExitButton,
  ModalSelectorsWrapper,
  ModalSelectorWrapper,
  SearchCoinInput,
  DateSelector,
  ModalButton,
} from "./AddAssetModal.styles";

const AddAssetModal = (props) => {
  return (
    <BackgroundWrapper>
      <Wrapper ref={props.innerRef}>
        <ContentWrapper>
          <ModalTitleWrapper>
            <ModalTitleText>Select Coins</ModalTitleText>
          </ModalTitleWrapper>
          <ModalContentWrapper>
            <IdOuterWrapper>
              <IdInnerWrapper>
                <CoinImageWrapper>
                  <CoinIcon src="icons/bitcoin.svg" />
                </CoinImageWrapper>
                <CoinTableRowText>Bitcoin (BTC)</CoinTableRowText>
              </IdInnerWrapper>
            </IdOuterWrapper>
            <ModalSelectorsWrapper>
              <ModalSelectorWrapper>
                <SearchAsset />
              </ModalSelectorWrapper>
              <ModalSelectorWrapper>
                <SearchCoinInput placeholder="Amount Purchased" />
              </ModalSelectorWrapper>
              <ModalSelectorWrapper>
                <DateSelector type="date" />
              </ModalSelectorWrapper>
            </ModalSelectorsWrapper>
          </ModalContentWrapper>
          <ModalButtonsWrapper>
            <ModalButton white={true}>
              <ModalButtonText>Close</ModalButtonText>
            </ModalButton>
            <ModalButton>
              <ModalButtonText>Save and Continue</ModalButtonText>
            </ModalButton>
          </ModalButtonsWrapper>
          <ExitButton scr="icons/exit.svg" onClick={props.handleExitClick} />
        </ContentWrapper>
      </Wrapper>
    </BackgroundWrapper>
  );
};

export default AddAssetModal;
