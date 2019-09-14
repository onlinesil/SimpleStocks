export const parseFloatToDollars = (float) => {
    let dollars = "";
    if (float < 0) {
        dollars = "-$" + parseFloat(-float).toFixed(2); 
    } else {
        dollars = "$" + parseFloat(float).toFixed(2); 
    }
    return dollars
}
export const parseFloatToPostNegPercent = (float) => {
    let percent = "0.00%";
    if (float === 0 || float.toFixed(2) === "0.00") {
        percent =  parseFloat(float).toFixed(2) + "%";
    } else if (float < 0) {
        percent = "-" + parseFloat(-float).toFixed(2) + "%"; 
    } else if (float > 0) {
        percent = "+" + parseFloat(float).toFixed(2) + "%"; 
    } 
    return percent;
}
export const parseFloatToPosNegDollars = (float) => {
    let dollars = "$0.00";
    if (float < 0) {
        dollars = "-$" + parseFloat(-float).toFixed(2);
    } else if (float > 0) {
        dollars = "+$" + parseFloat(float).toFixed(2);
    } else {
        dollars = "$" + parseFloat(float).toFixed(2);
    }
    return dollars;
}
export const parseLargeNum = (float) => {
    let dollars = "";

    if (float >= 1000000000000) {
        dollars = (float / 1000000000000).toFixed(2) + "T";
    } else if (float >= 1000000000) {
        dollars = (float / 1000000000).toFixed(2) + "B";
    } else if (float >= 1000000) {
        dollars = (float / 1000000).toFixed(2) + "M";
    } else if (float >= 1000) {
        dollars = (float / 1000).toFixed(2) + "K";
    } else {
        dollars = float;
    }
    return dollars;
}
