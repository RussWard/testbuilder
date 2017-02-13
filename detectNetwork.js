
var detectNetwork = function(cardNumber) {
  var length = cardNumber.length;

  var dinersClub = function(cardNumber) {
    return length === 14 && (cardNumber.substr(0, 2) === '38' || cardNumber.substr(0, 2) === '39');
  };
  var americanExpress = function(cardNumber) {
    return length === 15 && (cardNumber.substr(0, 2) === '34' || cardNumber.substr(0, 2) === '37');
  };
  var visa = function(cardNumber) {
    return cardNumber.substr(0, 1) === '4' && [13, 16, 19].includes(length);
  };
  var masterCard = function(cardNumber) {
    return length === 16 && ['51', '52', '53', '54', '55'].includes(cardNumber.substr(0, 2));
  };
  var discover = function(cardNumber) {
    if([16, 19].includes(length)) {
      if(cardNumber.substr(0, 4) === '6011') {
        return true;
      }
      if(cardNumber.substr(0, 2) === '65') {
        return true;
      }
      if(['644', '645', '646', '647', '648', '649'].includes(cardNumber.substr(0, 3))) {
        return true;
      }
    } else {
      return false;
    }
  };
  var maestro = function(cardNumber) {
    return ['5018', '5020', '5038', '6304'].includes(cardNumber.substr(0, 4)) && [12, 13, 14, 15, 16, 17, 18, 19].includes(length);
  };
  var chinaUnionPay = function(cardNumber) {
    var result = false;
    if([16, 17, 18, 19].includes(cardNumber.length)) {
      for(var prefix = 622126; prefix <= 622925; prefix++) {
        if(cardNumber.substr(0, 6) === prefix.toString()) {
          result = true;
        }
      }
      if(['624', '625', '626'].includes(cardNumber.substr(0, 3))) {
        result = true;
      }
      for(var prefix = 6282; prefix <= 6288; prefix++) {
        if(cardNumber.substr(0, 4) === prefix.toString()) {
          result = true;
        }
      }
    }
    return result;
  };
  var _switch = function(cardNumber) {
    var result = false;
    var prefixFourArray = ['4903', '4905', '4911', '4936', '6333', '6759'];
    if([16, 18, 19].includes(cardNumber.length)) {
      if(prefixFourArray.includes(cardNumber.substr(0, 4))) {
        result = true;
      }
      if(['564182', '633110'].includes(cardNumber.substr(0, 6))) {
        result = true;
      }
    }
    return result;
  };

  if(visa(cardNumber) && _switch(cardNumber)) {
    return 'Switch';
  } else if(dinersClub(cardNumber)) {
    return 'Diner\'s Club';
  } else if(americanExpress(cardNumber)) {
    return 'American Express';
  } else if(visa(cardNumber)) {
    return 'Visa';
  } else if(masterCard(cardNumber)) {
    return 'MasterCard';
  } else if(discover(cardNumber)) {
    return 'Discover';
  } else if(maestro(cardNumber)) {
    return 'Maestro';
  } else if(chinaUnionPay(cardNumber)) {
    return 'China UnionPay';
  } else if(_switch(cardNumber)) {
    return 'Switch'
  } else {
  return 'Card not recognized';
  }
};
/*
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
console.log(detectNetwork('6441627384727374837') === 'Discover');
console.log(detectNetwork('50203738293748372') === 'Maestro');


var detectNetwork = function(cardNumber) {
  var length = cardNumber.length;
  var prefixFour = cardNumber.substr(0, 4);
  var prefixThree = cardNumber.substr(0, 3);
  var prefixTwo = cardNumber.substr(0, 2);
  var prefixOne = cardNumber.substr(0, 1);
  var network = '';
  if(length === 14 && (prefixTwo === '38' || prefixTwo === '39')) {
    network += 'Diner\'s Club';
  } else if(length === 15 && (prefixTwo === '34' || prefixTwo === '37')) {
    network += 'American Express';
  } else if(prefixOne === '4' && [13, 16, 19].includes(length)) {
    network += 'Visa';
  } else if(length === 16 && ['51', '52', '53', '54', '55'].includes(prefixTwo)) {
    network += 'MasterCard';
  } else if([16, 19].includes(length) && (prefixFour === '6011' || prefixTwo === '65' || ['644', '645', '646', '647', '648', '649'].includes(prefixThree))) {
    network += 'Discover';
  } else if(['5018', '5020', '5038', '6304'].includes(prefixFour) && [12, 13, 14, 15, 16, 17, 18, 19].includes(length)) {
    network += 'Maestro';
  } else if(network = '') {
    network = 'Card not recognized';
  }
  return network;
};
*/