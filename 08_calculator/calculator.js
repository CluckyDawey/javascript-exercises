const add = function(a, b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(nums) {
	let finalSum = 0;

  nums.forEach(x => finalSum += x*1)

  return finalSum;
};

const multiply = function(numsMul) {
  let startNum = numsMul[0];

  numsMul.slice(1).forEach(x => startNum *= x)

  return startNum;
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(z) {
  if (z === 0){
    return 1;
  }

  let i = 1;
  let result = 1;

  while (i <= z) {
    result *= i;

    i++
  }

  return result
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
