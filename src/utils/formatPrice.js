import numeral from "numeral";

export const addCommas = (price) => {
    return numeral(price).format('$0,0.00');
}

export const addDecimalsAndShorten = (price) => {
    return numeral(price).format('($0.00 a)');
}