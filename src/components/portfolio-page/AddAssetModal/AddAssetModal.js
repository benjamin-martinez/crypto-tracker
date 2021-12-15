import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAsset } from "store/portfolio/actions";
import { SearchAsset } from "components/portfolio-page";
import {
  ModalTitleText,
  CoinTableRowText,
  ModalButtonText,
} from "styles/Fonts";
import {
  BackgroundOuterWrapper,
  BackgroundInnerWrapper,
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
  const dispatch = useDispatch();
  const [amountInput, setAmountInput] = useState("");
  const [dateInput, setDateInput] = useState("2021-01-01");
  const asset = useSelector(state => state.portfolio.addAssetSelection)

  const selectedCoin = useSelector(
    (state) => state.portfolio.addAssetSelection
  );

  const handleAmountChange = (e) => {
    setAmountInput(e.target.value);
  };

  const handleDateChange = (e) => {
    setDateInput(e.target.value);
  };

  const handleSaveClick = () => {

    //dispatch save
    props.handleExitClick();
    console.log(asset)
    dispatch(addAsset({
      data: asset,
      amount: amountInput,
      datePurchased: dateInput
    }))
  };

  const handleExitClick = () => {
    props.handleExitClick();
  };

  return (
    <BackgroundOuterWrapper>
      <BackgroundInnerWrapper></BackgroundInnerWrapper>
      <Wrapper ref={props.innerRef}>
        <ContentWrapper>
          <ModalTitleWrapper>
            <ModalTitleText>Select Coins</ModalTitleText>
          </ModalTitleWrapper>
          <ModalContentWrapper>
            <IdOuterWrapper>
              <IdInnerWrapper>
                <CoinImageWrapper>
                  <CoinIcon src={selectedCoin.large} />
                </CoinImageWrapper>
                {selectedCoin.name && (
                  <CoinTableRowText>
                    {selectedCoin.name}&nbsp;({selectedCoin.symbol})
                  </CoinTableRowText>
                )}
              </IdInnerWrapper>
            </IdOuterWrapper>
            <ModalSelectorsWrapper>
              <ModalSelectorWrapper>
                <SearchAsset />
              </ModalSelectorWrapper>
              <ModalSelectorWrapper>
                <SearchCoinInput
                  placeholder="Amount Purchased"
                  onChange={handleAmountChange}
                  value={amountInput}
                />
              </ModalSelectorWrapper>
              <ModalSelectorWrapper>
                <DateSelector
                  type="date"
                  onChange={handleDateChange}
                  value={dateInput}
                />
              </ModalSelectorWrapper>
            </ModalSelectorsWrapper>
          </ModalContentWrapper>
          <ModalButtonsWrapper>
            <ModalButton white={true} onClick={handleExitClick}>
              <ModalButtonText>Close</ModalButtonText>
            </ModalButton>
            <ModalButton onClick={handleSaveClick}>
              <ModalButtonText>Save and Continue</ModalButtonText>
            </ModalButton>
          </ModalButtonsWrapper>
          <ExitButton scr="icons/exit.svg" onClick={handleExitClick} />
        </ContentWrapper>
      </Wrapper>
    </BackgroundOuterWrapper>
  );
};

export default AddAssetModal;
