var num = 1;
num = 3;
var price = 1.5;
var myName = 'Packt';
var trueValue = true;
var nullVar = null;
var und;


console.log('num: ' + num);
console.log('myName: ' + myName);
console.log('trueValue: ' + trueValue);
console.log('price: ' + price);
console.log('nullVar: ' + nullVar);
console.log('und: ' + und);


// ******* Variable Scope

var myVariable = 'global';
myOtherVariable = 'global';

function myFunction() {
  var myVariable = 'local';
  return myVariable;
}

function myOtherFunction() {
  myOtherVariable = 'local';
  return myOtherVariable;
}

console.log(myVariable);
console.log(myFunction());
console.log(myVariable);

console.log(myOtherVariable);
console.log(myOtherFunction());
console.log(myOtherVariable);