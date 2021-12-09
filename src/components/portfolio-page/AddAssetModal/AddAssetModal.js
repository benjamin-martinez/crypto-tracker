import {
  ModalTitleText,
  CoinTableRowText,
  ModalButtonText,
} from "styles/Fonts";
import {
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
  ModalButton,
} from "./AddAssetModal.styles";

const AddAssetModal = (props) => {
  return (
    <Wrapper>
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
            <ModalSelectorWrapper></ModalSelectorWrapper>
            <ModalSelectorWrapper></ModalSelectorWrapper>
            <ModalSelectorWrapper></ModalSelectorWrapper>
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
  );
};

export default AddAssetModal;
