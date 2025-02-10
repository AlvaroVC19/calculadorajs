function suma(a, b) {
    return a + b;
  }
  
  function resta(a, b) {
    return a - b;
  }
  
  function multi(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) {
      return "No es posible hacer la operación";
    } 
    return a / b;
  }
  
  

  module.exports = { suma, resta, multi, divide };