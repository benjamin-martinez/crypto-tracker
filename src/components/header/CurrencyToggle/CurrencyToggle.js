import React from "react";
import { NavText } from "styles/Fonts";
import { CurrencyToggleDownArrow, CurrencyToggleUpArrow } from "styles/arrows";
import { Wrapper, CurrencyWrapper, Icon, CurrentCurrency, Dropdown, DropdownCurrencyOuterWrapper, DropdownCurrencyInnerWrapper } from "./CurrencyToggle.styles"

export default class CurrencyToggle extends React.Component {
    state = {
        isDropdownActive: false,
        activeCurrency: {
            name: "USD",
            isActive: true,
            symbol: "$"
        },
        currencies: [
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
        ],
        isMouseOver: false
    }
    wrapperRef = React.createRef();

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside = (event) => {
        if (this.wrapperRef.current && !this.wrapperRef.current.contains(event.target)) {
            this.setState({isDropdownActive: false})
        }
    }

    handleOpenDropdownClick = () => {
        this.setState({isDropdownActive: !this.state.isDropdownActive})
    }
    handleSelectionClick = (currency) => {
        const tempArr = this.state.currencies.map(cur => {
            return {
                ...cur,
                isActive: cur.name === currency.name
            }
        })
        this.setState({currencies: tempArr, activeCurrency: currency, isDropdownActive: false})
    }
    handleMouseOver = () => this.setState({isMouseOver: true})

    handleMouseLeave = () => this.setState({isMouseOver: false})
    render() {
        return (
            <Wrapper ref={this.wrapperRef} onMouseOver={() => this.handleMouseOver()} onMouseLeave={() => this.handleMouseLeave()}>
                <CurrencyWrapper onClick={() => this.handleOpenDropdownClick()}>
                    <Icon><NavText>{this.state.activeCurrency.symbol}</NavText></Icon>
                    <CurrentCurrency><NavText>{this.state.activeCurrency.name}</NavText>{this.state.isDropdownActive ? <CurrencyToggleUpArrow /> : <CurrencyToggleDownArrow />}</CurrentCurrency>
                </CurrencyWrapper>
                {this.state.isDropdownActive && <Dropdown >
                    {this.state.currencies.map((currency) => <DropdownCurrencyOuterWrapper key={currency.name} onClick={() => this.handleSelectionClick(currency)}>
                        <DropdownCurrencyInnerWrapper>
                    <Icon><NavText>{currency.symbol}</NavText></Icon>
                    <CurrentCurrency><NavText>{currency.name}</NavText>{currency.isActive && <NavText>√</NavText>}</CurrentCurrency>
                    </DropdownCurrencyInnerWrapper>
                </DropdownCurrencyOuterWrapper>)}
                    
                </Dropdown>}
            </Wrapper>
        )
    }
}

