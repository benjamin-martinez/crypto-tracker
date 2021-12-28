import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getActiveCurrency } from "store/currencies";
import { SectionHeading } from "styles/Fonts";
import { BackgroundChartWrapper } from "components/coin-page";
import { addCommasNoDec } from "utils";
import {
  Wrapper,
  ConversionWrapper,
  CoinInput,
  Name,
  InputPriceDiv,
  Input,
  ConversionArrowsIcon,
} from "./InteractiveComponent.styles";

const InteractiveComponent = (props) => {
  const [tokenAmount, setTokenAmount] = useState(1);
  const [fiatAmount, setFiatAmount] = useState("");
  const activeCurrency = useSelector(getActiveCurrency);

  const handleAmountChange = (e, isFiat) => {
    const amountValue = e.target.value;
    const amountWithNoCommas = amountValue.replace(/,/g, "");
    if (/^\d+$/.test(amountWithNoCommas)) {
      if (isFiat) {
        setTokenAmount(amountValue);
        setFiatAmount(
          parseInt(props.coin.market_data.current_price[activeCurrency.name]) /
            parseInt(amountValue)
        );
      } else {
        setTokenAmount(e.target.value);
        setFiatAmount(
          parseInt(props.coin.market_data.current_price[activeCurrency.name]) *
            parseInt(e.target.value)
        );
      }
    }
    if (amountValue === "") {
      setFiatAmount("");
      setTokenAmount("");
    }
  };

  useEffect(() => {
    if (props.coin.id)
      setFiatAmount(props.coin.market_data.current_price[activeCurrency.name]);
    //eslint-disable-next-line
  }, [activeCurrency]);

  return (
    <Wrapper>
      <ConversionWrapper>
        <CoinInput>
          <Name>
            <SectionHeading>{props.coin.symbol.toUpperCase()}</SectionHeading>
          </Name>
          <InputPriceDiv>
            <Input
              value={tokenAmount}
              onChange={(e) => handleAmountChange(e, false)}
            />
          </InputPriceDiv>
        </CoinInput>
        <ConversionArrowsIcon src="icons/conversion-arrows.svg" />
        <CoinInput>
          <Name>
            <SectionHeading>{activeCurrency.name.toUpperCase()}</SectionHeading>
          </Name>
          <InputPriceDiv>
            {activeCurrency.symbol}
            <Input
              value={addCommasNoDec(fiatAmount)}
              onChange={(e) => handleAmountChange(e, true)}
            />
          </InputPriceDiv>
        </CoinInput>
      </ConversionWrapper>
      <BackgroundChartWrapper coinId={props.coin.id} />
    </Wrapper>
  );
};

export default InteractiveComponent;
