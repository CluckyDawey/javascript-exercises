const fibonacci = function(x) {
 let requestedNum = +x;
 let seq = [1,1];
 let i = 2;
 
    if (requestedNum === 1 || requestedNum === 2) {
    return seq[requestedNum-1];
    } else if (requestedNum === 0) {
        return 0
    } else if (requestedNum < 0) {
        return "OOPS"
    } 
    
    do {
        seq[i] = seq[seq.length -1] + seq[seq.length - 2] ;
        i++;
    } while (i < requestedNum)

    return seq[x-1]
};

// Do not edit below this line
module.exports = fibonacci;
