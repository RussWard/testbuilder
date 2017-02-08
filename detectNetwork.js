
var detectNetwork = function(cardNumber) {
  var length = cardNumber.length;
  var prefix = cardNumber.substr(0, 2);
  if(length === 14 && (prefix === '38' || prefix === '39')) {
    return 'Diner\'s Club';
  } else if(length === 15 && (prefix === '34' || prefix === '37')) {
    return 'American Express';
  } else if(cardNumber.substr(0, 1) === '4' && [13, 16, 19].includes(length)) {
    return 'Visa';
  } else if(length === 16 && ['51', '52', '53', '54', '55'].includes(prefix)) {
    return 'MasterCard';
  } else {
    return 'Card not recognized';
  }

};

console.log(detectNetwork('38345678901234') === 'Diner\'s Club');
console.log(detectNetwork('39345678901234') === 'Diner\'s Club');
console.log(detectNetwork('343456789012345') === 'American Express');
console.log(detectNetwork('373456789012345') === 'American Express');
console.log(detectNetwork('4123456789012') === 'Visa');
console.log(detectNetwork('4123456789012345') === 'Visa');
console.log(detectNetwork('4123456789012345678') === 'Visa');
console.log(detectNetwork('5112345678901234') === 'MasterCard');
console.log(detectNetwork('5212345678901234') === 'MasterCard');
console.log(detectNetwork('5312345678901234') === 'MasterCard');
console.log(detectNetwork('5412345678901234') === 'MasterCard');
console.log(detectNetwork('5512345678901234') === 'MasterCard');

