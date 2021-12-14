var number;
function add(a, b){ //add a and b and return the result.
  number = a + b;
  return number;
}
function subtract(a, b){ //subtract a and b and return the result.
  number = a - b;
  return number;
}
function multiply(a, b){ //multiply a and b and return the result.
  number = a * b;
  return number;
}
function divide(a, b){ //divide a and b and return the result.
  number = a / b;
  return number;
}
//increment(n) increments n and returns the result
function increment(a){
    number = a + 1
    return  number;
}
//decrement(n) decrements n and returns the result
function decrement(a){
    number = a - 1
    return  number;
}
//parses n as an integer and returns the parsed integer
function makeInt(a) {
    number = parseInt(a,10) 
    return number
}
//preserves n's decimals (it parses n as a floating point number) and returns the parsed number
function preserveDecimal(n){
    number = parseFloat(n,10)
    return number
}