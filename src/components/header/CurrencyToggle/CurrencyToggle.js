import React, { useEffect, useState, useRef } from "react";
import { NavText } from "styles/Fonts";
import { CurrencyToggleDownArrow, CurrencyToggleUpArrow } from "styles/arrows";
import { Wrapper, CurrencyWrapper, Icon, CurrentCurrency, Dropdown, DropdownCurrencyOuterWrapper, DropdownCurrencyInnerWrapper } from "./CurrencyToggle.styles"

const CurrencyToggle = () =>  {
    const [isDropdownActive, setIsDropdownActive] = useState(false)
    const [activeCurrency, setActiveCurrency] = useState({
        name: "USD",
        isActive: true,
        symbol: "$"
    })
    const [currencies, setCurrencies] = useState(
        [
            {
                name: "USD",
                isActive: true,
                symbol: "$"
            },
            {
                name: "EUR",
                isActive: false,
                symbol: "€"
            },
            {
                name: "GBP",
                isActive: false,
                symbol: "£"
            }
        ]
    )

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setIsDropdownActive(false)
                }
            }
    
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const handleOpenDropdownClick = () => setIsDropdownActive(!isDropdownActive)

    const handleSelectionClick = (currency) => {
        const tempArr = currencies.map(cur => {
            return {
                ...cur,
                isActive: cur.name === currency.name
            }
        })
        setCurrencies(tempArr)
        setActiveCurrency(currency)
        setIsDropdownActive(false)
    }
    return (
        <Wrapper>
            <CurrencyWrapper onClick={() => handleOpenDropdownClick()}>
                <Icon><NavText>{activeCurrency.symbol}</NavText></Icon>
                <CurrentCurrency><NavText>{activeCurrency.name}</NavText>{isDropdownActive ? <CurrencyToggleUpArrow /> : <CurrencyToggleDownArrow />}</CurrentCurrency>
            </CurrencyWrapper>
            {isDropdownActive && <Dropdown ref={wrapperRef}>
                {currencies.map((currency) => <DropdownCurrencyOuterWrapper key={currency.name} onClick={() => handleSelectionClick(currency)}>
                    <DropdownCurrencyInnerWrapper>
                <Icon><NavText>{currency.symbol}</NavText></Icon>
                <CurrentCurrency><NavText>{currency.name}</NavText>{currency.isActive && <NavText>√</NavText>}</CurrentCurrency>
                </DropdownCurrencyInnerWrapper>
            </DropdownCurrencyOuterWrapper>)}
            </Dropdown>}
        </Wrapper>
    )
}

export default CurrencyToggle