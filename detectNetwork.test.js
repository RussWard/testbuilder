<<<<<<< HEAD

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
=======

var FILL_ME_IN = 'Fill this value in';

/*
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail.
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out.
  // You will not be able to proceed with a failing test.
  var should = chai.should()
  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num % 2 === 0;
    };

    even(10).should.equal(true);
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num % 2 === 0;
    };

    even(10).should.equal(true);
    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
>>>>>>> 8a0a852753e9f0b300607e5ce4579b0e86d2d52e
  });
});
*/
function addLength(num) {
  var lengthString = '';
  while(lengthString.length < num) {
    lengthString += Math.floor(Math.random() * 10);
  }
  return lengthString;
}

<<<<<<< HEAD
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
=======
var detectNetworkTest = function(network) {
  describe(network, function() {
    var should = chai.should();

    for(var length = 12; length <= 19; length++) {
      (function(length) {
        ['5018', '5020', '5038', '6304'].forEach(function(maestPrefix) {
          it('has a prefix of ' + maestPrefix + ' and a length of ' + length.toString(), function() {
            if(network === 'Maestro') {
              detectNetwork(maestPrefix + addLength(length - maestPrefix.length)).should.equal(network);
            } else {
              detectNetwork(maestPrefix + addLength(length - maestPrefix.length)).should.not.equal(network);
            }
          });
        });
        if(length >= 16) {
          var china6PrefixArray = [];
          for(var china6Prefix = 622126; china6Prefix <= 622295; china6Prefix++) {
            china6PrefixArray.push(china6Prefix);
          }
          china6PrefixArray.forEach(function(china6Prefix) {
            it('has a prefix of ' + china6Prefix.toString() + ' and a length of ' + length.toString(), function() {
              if(network === 'China UnionPay') {
                detectNetwork(china6Prefix.toString() + addLength(length - china6Prefix.toString().length)).should.equal(network);
              } else {
                detectNetwork(china6Prefix.toString() + addLength(length - china6Prefix.toString().length)).should.not.equal(network);
              }
            });
          });
          var china3PrefixArray = [];
          for(var china3Prefix = 624; china3Prefix <= 626; china3Prefix++) {
            china3PrefixArray.push(china3Prefix);
          }
          china3PrefixArray.forEach(function(china3Prefix) {
            it('has a prefix of ' + china3Prefix.toString() + ' and a length of ' + length.toString(), function() {
              if(network === 'China UnionPay') {
                detectNetwork(china3Prefix.toString() + addLength(length - china3Prefix.toString().length)).should.equal(network);
              } else {
                detectNetwork(china3Prefix.toString() + addLength(length - china3Prefix.toString().length)).should.not.equal(network);
              }
            });
          });
          var china4PrefixArray = [];
          for(var china4Prefix = 6282; china4Prefix <= 6288; china4Prefix++) {
            china4PrefixArray.push(china4Prefix);
          }
          china4PrefixArray.forEach(function(china4Prefix) {
            it('has a prefix of ' + china4Prefix.toString() + ' and a length of ' + length.toString(), function() {
              if(network === 'China UnionPay') {
                detectNetwork(china4Prefix.toString() + addLength(length - china4Prefix.toString().length)).should.equal(network);
              } else {
                detectNetwork(china4Prefix.toString() + addLength(length - china4Prefix.toString().length)).should.not.equal(network);
              }
            });
          });
        }
        if(length === 14) {
          ['38', '39'].forEach(function(dinerPrefix) {
            it('has a prefix of ' + dinerPrefix.toString() + ' and a length of ' + length.toString(), function() {
              if(network === 'Diner\'s Club') {
                detectNetwork(dinerPrefix.toString() + addLength(length - dinerPrefix.toString().length)).should.equal(network);
              } else {
                detectNetwork(dinerPrefix.toString() + addLength(length - dinerPrefix.toString().length)).should.not.equal(network);
              }
            });
          });
        }
        if(length === 15) {
          ['34', '37'].forEach(function(amexPrefix) {
            it('has a prefix of ' + amexPrefix.toString() + ' and a length of ' + length.toString(), function() {
              if(network === 'American Express') {
                detectNetwork(amexPrefix.toString() + addLength(length - amexPrefix.toString().length)).should.equal(network);
              } else {
                detectNetwork(amexPrefix.toString() + addLength(length - amexPrefix.toString().length)).should.not.equal(network);
              }
            });
          });
        }
        if(length === 16) {
          var mcPrefixArray = [];
          for(var mcPrefix = 51; mcPrefix <= 55; mcPrefix++) {
            mcPrefixArray.push(mcPrefix);
          }
          mcPrefixArray.forEach(function(mcPrefix) {
            it('has a prefix of ' + mcPrefix.toString() + ' and a length of ' + length.toString(), function() {
              if(network === 'MasterCard') {
                detectNetwork(mcPrefix.toString() + addLength(length - mcPrefix.toString().length)).should.equal(network);
              } else {
                detectNetwork(mcPrefix.toString() + addLength(length - mcPrefix.toString().length)).should.not.equal(network);
              }
            });
          });
        }
        if([13, 16, 19].includes(length)) {
          var visaPrefix = '4';
          it('has a prefix of ' + visaPrefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'Visa') {
              detectNetwork(visaPrefix.toString() + addLength(length - visaPrefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(visaPrefix.toString() + addLength(length - visaPrefix.toString().length)).should.not.equal(network);
            }
          });
        }
        if([16, 19].includes(length)) {
          ['65', '6011'].forEach(function(discPrefix) {
            it('has a prefix of ' + discPrefix.toString() + ' and a length of ' + length.toString(), function() {
              if(network === 'Discover') {
                detectNetwork(discPrefix.toString() + addLength(length - discPrefix.toString().length)).should.equal(network);
              } else {
                detectNetwork(discPrefix.toString() + addLength(length - discPrefix.toString().length)).should.not.equal(network);
              }
            });
          });
          var disc3PrefixArray = [];
          for(var disc3Prefix = 644; disc3Prefix <= 649; disc3Prefix++) {
            disc3PrefixArray.push(disc3Prefix);
          }
          disc3PrefixArray.forEach(function(disc3Prefix) {
            it('has a prefix of ' + disc3Prefix.toString() + ' and a length of ' + length.toString(), function() {
              if(network === 'Discover') {
                detectNetwork(disc3Prefix.toString() + addLength(length - disc3Prefix.toString().length)).should.equal(network);
              } else {
                detectNetwork(disc3Prefix.toString() + addLength(length - disc3Prefix.toString().length)).should.not.equal(network);
              }
            });
          });
        }
        if([16, 18, 19].includes(length)) {
          ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'].forEach(function(switchPrefix) {
            it('has a prefix of ' + switchPrefix.toString() + ' and a length of ' + length.toString(), function() {
              if(network === 'Switch') {
                detectNetwork(switchPrefix.toString() + addLength(length - switchPrefix.toString().length)).should.equal(network);
              } else {
                detectNetwork(switchPrefix.toString() + addLength(length - switchPrefix.toString().length)).should.not.equal(network);
              }
            });
          });
        }
      })(length)
    }
  });
}

detectNetworkTest('Diner\'s Club');
detectNetworkTest('American Express');
detectNetworkTest('Visa');
detectNetworkTest('MasterCard');
detectNetworkTest('Discover');
detectNetworkTest('Maestro');
detectNetworkTest('China UnionPay');
detectNetworkTest('Switch');

>>>>>>> 8a0a852753e9f0b300607e5ce4579b0e86d2d52e
