const sumAll = function(a, b) {
    if(a < 0 || b < 0 || typeof(a) !== "number" || typeof(b) !== "number") {
        return "ERROR"
    }
    
    let startingNum;
    let targetNum;
    let finalNum = 0;

    if (a < b) {
        startingNum = a;
        targetNum = b;
    } else {
        startingNum = b;
        targetNum = a;
    }

    for (let i = startingNum; i <= targetNum; i++) {
        finalNum += i;
    }

    return finalNum

};

// Do not edit below this line
module.exports = sumAll;
