function suma(a, b){
    return a + b;
}

function resta(a, b){
    return a - b;
}

function multi(a, b){
    return a * b;
}

function divide(a, b) {
    let result;
    if (b === 0) {
        result = "No es posible hacer la operacion";
    } else {
        result = a / b;
    }
    return result;
}


module.exports = { suma, resta, multi, divide };