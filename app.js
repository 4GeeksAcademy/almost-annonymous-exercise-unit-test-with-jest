
// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

//one euro is: 
function fromEuroToDollar(euroAmount) {
    const euroConversionRate = 1.07; 
    let dollarAmount = euroAmount*euroConversionRate;
    return dollarAmount;
};
function fromDollarToYen(dollarAmount) {
    const dollarConversionRate = 156.5;
    let yenAmount = dollarAmount*dollarConversionRate; 
    return yenAmount; 
};
function fromYenToPound(yenAmount){
    const yenConversionRate = 0.00556; 
    let poundAmount = yenAmount*yenConversionRate;
    return poundAmount;
};

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};