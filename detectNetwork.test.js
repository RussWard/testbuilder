
function addLength(num) {
  var lengthString = '';
  while(lengthString.length < num) {
    lengthString += Math.floor(Math.random() * 10);
  }
  return lengthString;
}

describe('Diner\'s Club', function() {
  var should = chai.should();

  it('has a prefix of 38 and a length of 14', function() {
    detectNetwork('38345678901234').should.equal('Diner\'s Club')
  });

  it('has a prefix of 39 and a length of 14', function() {
    detectNetwork('39345678901234').should.equal('Diner\'s Club')
  });
});

describe('American Express', function() {
  var should = chai.should();

  it('has a prefix of 34 and a length of 15', function() {
    detectNetwork('343456789012345').should.equal('American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    detectNetwork('373456789012345').should.equal('American Express');
  });
});

describe('Visa', function() {
  var should = chai.should();


  it('has a prefix of 4 and a length of 13', function() {
    detectNetwork('4123456789012').should.equal('Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    detectNetwork('4123456789012345').should.equal('Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    detectNetwork('4123456789012345678').should.equal('Visa');
  });
});

describe('MasterCard', function() {
  var should = chai.should();

  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  });
});

describe('Discover', function() {
  var should = chai.should();

  it('has a prefix of 6011 and a length of 16', function() {
    detectNetwork('6011123456789012').should.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function() {
    detectNetwork('6011123456789012345').should.equal('Discover');
  });

  it('has a prefix of 65 and a length of 19', function() {
    detectNetwork('6512345678901234567').should.equal('Discover');
  });

  it('has a prefix of 65 and a length of 16', function() {
    detectNetwork('6512345678901234').should.equal('Discover');
  });

  for (var prefix = 644; prefix <= 649; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        detectNetwork(prefix.toString() + '1234567890123').should.equal('Discover');
      });

      it('has a prefix of ' + prefix + ' and a length of 19', function () {
        detectNetwork(prefix.toString() + '1234567890123456').should.equal('Discover');
      });
    })(prefix)
  }
});

describe('Maestro', function() {
  var should = chai.should();

  for(var length = 12; length <= 19; length++) {
    (function(length) {
      ['5018', '5020', '5038', '6304'].forEach(function(prefix) {
        it('has a prefix of ' + prefix + ' and a length of ' + length.toString(), function() {
          detectNetwork(prefix + addLength(length - prefix.length)).should.equal('Maestro');
        });
      });
    })(length)
  }
});


describe('China UnionPay', function() {
  var should = chai.should();

  for(var length = 16; length <= 19; length++) {
    (function(length) {
      var china6PrefixArray = [];
      for(var china6Prefix = 622126; china6Prefix <= 622925; china6Prefix++) {
        china6PrefixArray.push(china6Prefix);
      }
      china6PrefixArray.forEach(function(china6Prefix) {
        it('has a prefix of ' + china6Prefix.toString() + ' and a length of ' + length.toString(), function() {
          detectNetwork(china6Prefix.toString() + addLength(length - china6Prefix.toString().length)).should.equal('China UnionPay');
        });
      });
      var china3PrefixArray = [];
      for(var china3Prefix = 624; china3Prefix <= 626; china3Prefix++) {
        china3PrefixArray.push(china3Prefix);
      }
      china3PrefixArray.forEach(function(china3Prefix) {
        it('has a prefix of ' + china3Prefix.toString() + ' and a length of ' + length.toString(), function() {
          detectNetwork(china3Prefix.toString() + addLength(length - china3Prefix.toString().length)).should.equal('China UnionPay');
        });
      });
      var china4PrefixArray = [];
      for(var china4Prefix = 6282; china4Prefix <= 6288; china4Prefix++) {
        china4PrefixArray.push(china4Prefix);
      }
      china4PrefixArray.forEach(function(china4Prefix) {
        it('has a prefix of ' + china4Prefix.toString() + ' and a length of ' + length.toString(), function() {
          detectNetwork(china4Prefix.toString() + addLength(length - china4Prefix.toString().length)).should.equal('China UnionPay');
        });
      });
    })(length)
  }
});

describe('Switch', function() {
  var should = chai.should();
  var prefixArray = ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'];

  for(var i = 0; i < prefixArray.length; i++) {
    (function(i) {
      [16, 18, 19].forEach(function(length) {
        var prefix = prefixArray[i];
        it('has a prefix of ' + prefix + ' and a length of ' + length.toString(), function() {
          detectNetwork(prefix + addLength(length - prefix.length)).should.equal('Switch');
        });
      });
    })(i)
  }
});
