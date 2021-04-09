
function Somar(a,b){
    return a + b
}

function Subtrair(a,b){
    return a - b
}

function Multiplicar(a,b){
    return a * b
}

function splitString(stringToSplit, separator) {
    var arrayOfStrings = stringToSplit.split(separator);
    return arrayOfStrings
}

function isNumber(item) {
    return /[0-9]+/.test(item);
  }

export {Somar, Subtrair,Multiplicar,splitString,isNumber}
