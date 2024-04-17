const palindromes = function (str) {
    let targets = /\W/gi;
    
    let newStr = str.replace(targets, "");

    let reversedStr = newStr.split("").reverse().join("");

    let fNewStr = newStr.toLowerCase();
    let fReversedStr = reversedStr.toLowerCase();

    return fNewStr === fReversedStr


};

// Do not edit below this line
module.exports = palindromes;
