
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
