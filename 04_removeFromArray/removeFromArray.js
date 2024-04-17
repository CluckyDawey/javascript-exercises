const removeFromArray = function(arr, ...subjs) {
    
    return arr.filter(x => !subjs.includes(x))
    

};

// Do not edit below this line
module.exports = removeFromArray;
