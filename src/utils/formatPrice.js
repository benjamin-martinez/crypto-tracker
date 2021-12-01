import numeral from "numeral";

export const addCommas = (price) => numeral(price).format('$0,0.00');

export const addDecimalsAndShorten = (price) => numeral(price).format('($0.00 a)');

export const formatLargeNumber = (num) => numeral(num).format('(0.00 a)');

export const formatPercentage = (percentage) => numeral(percentage).format('0.00') + "%";
