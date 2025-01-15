const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(a) {
	let sum=0;
    for(let i in a){
        sum+=a[i];
    }
    return sum
};

const multiply = function(a) {
    let mul=1;
    for(let i in a){
        mul*=a[i];
    }
    return mul;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
    let fac=1;
    for(let i =2; i<=a; i++) fac*=i;
    return fac;
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
