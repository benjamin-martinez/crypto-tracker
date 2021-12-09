import React, { useEffect, useState, useRef } from "react";
import { NavText } from "styles/Fonts";
import { CurrencyToggleDownArrow, CurrencyToggleUpArrow } from "styles/arrows";
import { connect } from "react-redux"
import { toggleCurrency } from "store/currencies/actions";
import { getActiveCurrency } from "store/currencies";
import {
  Wrapper,
  CurrencyWrapper,
  Icon,
  CurrentCurrency,
  Dropdown,
  DropdownCurrencyOuterWrapper,
  DropdownCurrencyInnerWrapper,
} from "./CurrencyToggle.styles";

const CurrencyToggle = (props) => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsDropdownActive(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const handleOpenDropdownClick = () => setIsDropdownActive(!isDropdownActive);

  const handleSelectionClick = (currency) => {
    props.toggleCurrency(currency)
    setIsDropdownActive(false);
  };

  return (
    <Wrapper>
      <CurrencyWrapper onClick={() => handleOpenDropdownClick()}>
        <Icon>
          <NavText>{props.activeCurrency.symbol}</NavText>
        </Icon>
        <CurrentCurrency>
          <NavText>{props.activeCurrency.name.toUpperCase()}</NavText>
          {isDropdownActive ? (
            <CurrencyToggleUpArrow />
          ) : (
            <CurrencyToggleDownArrow />
          )}
        </CurrentCurrency>
      </CurrencyWrapper>
      {isDropdownActive && (
        <Dropdown ref={wrapperRef}>
          {props.currencies.map((currency) => (
            <DropdownCurrencyOuterWrapper
              key={currency.name}
              onClick={() => handleSelectionClick(currency)}
            >
              <DropdownCurrencyInnerWrapper>
                <Icon>
                  <NavText>{currency.symbol}</NavText>
                </Icon>
                <CurrentCurrency>
                  <NavText>{currency.name.toUpperCase()}</NavText>
                  {currency.isActive && <NavText>√</NavText>}
                </CurrentCurrency>
              </DropdownCurrencyInnerWrapper>
            </DropdownCurrencyOuterWrapper>
          ))}
        </Dropdown>
      )}
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  currencies: state.currencies.data,
  activeCurrency: getActiveCurrency(state)
})

const mapDispatchToProps = {
  toggleCurrency
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyToggle);