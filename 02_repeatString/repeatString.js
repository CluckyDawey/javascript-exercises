const repeatString = function(str, num) {
    let i = 0;
    let finProduct = "";

    if (num === 0) {
        return finProduct;
    } else if (num < 0) {
        return 'ERROR'
    }

    do {
        finProduct += str
        i++
    } while (i < num)

    return finProduct
};

// Do not edit below this line
module.exports = repeatString;
