const palindromes = function (str) {
    let targets = /\W/gi;
    
    let newStr = str.replace(targets, "").toLowerCase();
    let reversedStr = newStr.split("").reverse().join("").toLowerCase();

    return newStr === reversedStr
};

// Do not edit below this line
module.exports = palindromes;
