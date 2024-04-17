const fibonacci = function(x) {
 let convertedNum = parseInt(x);
 let seq = [1,1];
 let i = 2;
 
    if (convertedNum === 1 || convertedNum === 2) {
    return seq[convertedNum-1];
    } else if (convertedNum === 0) {
        return 0
    } else if (convertedNum < 0) {
        return "OOPS"
    } 
    
    do {

        seq[i] = seq[seq.length -1] + seq[seq.length - 2] ;


        i++;

    } while (i < convertedNum)


    return seq[x-1]


 
};

// Do not edit below this line
module.exports = fibonacci;
