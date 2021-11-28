import numeral from "numeral";

export const addCommas = (price) => {
    return numeral(price).format('$0,0.00');
}

export const addDecimalsAndShorten = (price) => {
    return numeral(price).format('($0.00 a)');
}

export const formatLargeNumber = (num) => {
    return numeral(num).format('(0.00 a)')
}

export const formatPercentage = (percentage) => {
    return numeral(percentage).format('0.00') + "%"
}

export const addCommasNoDec = (num) => {
    return numeral(num).format('0,0')
}

export const fiveSigFigs = (num) => {
    return numeral(num).format('0.0000')
}