//one euro is: 
function fromEuroToDollar(euroAmount) {
    const conversionRate = 1.07; 
    let dollarAmount = euroAmount*conversionRate;
    return dollarAmount;
};
function fromDollarToYen(dollarAmount) {
    const conversionRate = 156.5;
    let yenAmount = dollarAmount*conversionRate; 
    return yenAmount; 
};
function fromYenToPound(yenAmount){
    const conversionRate = 0.87; 
    let poundAmount = yenAmount*conversionRate;
    return poundAmount;
};
