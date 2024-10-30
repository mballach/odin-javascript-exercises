const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	retVal = 0;
  for (const a in arr) {
    retVal=retVal+parseInt(arr[a]);
  }
  return retVal;
};

const multiply = function(arr) {
  retVal=1;
  for (const a in arr){
    retVal = retVal*arr[a];
  }
  return retVal;
};

const power = function(a,b) {
	return a**b
};

const factorial = function(a) {
	let i = 1;
  let retVal = 1;
  while (i<=a) {
    retVal = retVal*i;
    i++;
  }
  return retVal;
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
