/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';

function addLength(num) {
  var lengthString = '';
  while(lengthString.length < num) {
    lengthString += Math.floor(Math.random() * 10);
  }
  return lengthString;
}

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
  });
});
/*
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
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  var should = chai.should();

  it('has a prefix of 34 and a length of 15', function() {
    detectNetwork('343456789012345').should.equal('American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    detectNetwork('373456789012345').should.equal('American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/
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
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/
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

  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })

});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
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
      for(var prefix = 622126; prefix <= 622295; prefix++) {
        it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
          detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal('China UnionPay');
        });
      }
      for(var prefix = 624; prefix <= 626; prefix++) {
        it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
          detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal('China UnionPay');
        });
      }
      for(var prefix = 6282; prefix <= 6288; prefix++) {
        it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
          detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal('China UnionPay');
        });
      }
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
*/
describe('Diner\'s Club', function() {
  var should = chai.should();
  var network = 'Diners\'s Club';

  for(var length = 12; length <= 19; length++) {
    (function(length) {
      ['5018', '5020', '5038', '6304'].forEach(function(prefix) {
        it('has a prefix of ' + prefix + ' and a length of ' + length.toString(), function() {
          if(network === 'Maestro') {
            detectNetwork(prefix + addLength(length - prefix.length)).should.equal(network);
          } else {
            detectNetwork(prefix + addLength(length - prefix.length)).should.not.equal(network);
          }
        });
      });
      if(length >= 16) {
        for(var prefix = 622126; prefix <= 622295; prefix++) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'China UnionPay') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        }
        for(var prefix = 624; prefix <= 626; prefix++) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'China UnionPay') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        }
        for(var prefix = 6282; prefix <= 6288; prefix++) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'China UnionPay') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        }
      }
      if(length === 14) {
        ['38', '39'].forEach(function(prefix) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'Diner\'s Club') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        });
      }
      if(length === 15) {
        ['34', '37'].forEach(function(prefix) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'American Express') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        });
      }
      if(length === 16) {
        for(var prefix = 51; prefix <= 55; prefix++) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'MasterCard') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        }
      }
      if([13, 16, 19].includes(length)) {
        var prefix = 4;
        it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
          if(network === 'Visa') {
            detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
          } else {
            detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
          }
        });
      }
      if([16, 19].includes(length)) {
        ['65', '6011'].forEach(function(prefix) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'Discover') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        });
        for(var prefix = 644; prefix <= 649; prefix++) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'Discover') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        }
      }
      if([16, 18, 19].includes(length)) {
        ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'].forEach(function(prefix) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'Switch') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        });
      }
    })(length)
  }
});

describe('American Express', function() {
  var should = chai.should();
  var network = 'American Express';

  for(var length = 12; length <= 19; length++) {
    (function(length) {
      ['5018', '5020', '5038', '6304'].forEach(function(prefix) {
        it('has a prefix of ' + prefix + ' and a length of ' + length.toString(), function() {
          if(network === 'Maestro') {
            detectNetwork(prefix + addLength(length - prefix.length)).should.equal(network);
          } else {
            detectNetwork(prefix + addLength(length - prefix.length)).should.not.equal(network);
          }
        });
      });
      if(length >= 16) {
        for(var prefix = 622126; prefix <= 622295; prefix++) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'China UnionPay') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        }
        for(var prefix = 624; prefix <= 626; prefix++) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'China UnionPay') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        }
        for(var prefix = 6282; prefix <= 6288; prefix++) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'China UnionPay') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        }
      }
      if(length === 14) {
        ['38', '39'].forEach(function(prefix) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'Diner\'s Club') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        });
      }
      if(length === 15) {
        ['34', '37'].forEach(function(prefix) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'American Express') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        });
      }
      if(length === 16) {
        for(var prefix = 51; prefix <= 55; prefix++) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'MasterCard') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        }
      }
      if([13, 16, 19].includes(length)) {
        var prefix = 4;
        it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
          if(network === 'Visa') {
            detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
          } else {
            detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
          }
        });
      }
      if([16, 19].includes(length)) {
        ['65', '6011'].forEach(function(prefix) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'Discover') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        });
        for(var prefix = 644; prefix <= 649; prefix++) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'Discover') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        }
      }
      if([16, 18, 19].includes(length)) {
        ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'].forEach(function(prefix) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'Switch') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        });
      }
    })(length)
  }
});

describe('Visa', function() {
  var should = chai.should();
  var network = 'Visa';

  for(var length = 12; length <= 19; length++) {
    (function(length) {
      ['5018', '5020', '5038', '6304'].forEach(function(prefix) {
        it('has a prefix of ' + prefix + ' and a length of ' + length.toString(), function() {
          if(network === 'Maestro') {
            detectNetwork(prefix + addLength(length - prefix.length)).should.equal(network);
          } else {
            detectNetwork(prefix + addLength(length - prefix.length)).should.not.equal(network);
          }
        });
      });
      if(length >= 16) {
        for(var prefix = 622126; prefix <= 622295; prefix++) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'China UnionPay') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        }
        for(var prefix = 624; prefix <= 626; prefix++) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'China UnionPay') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        }
        for(var prefix = 6282; prefix <= 6288; prefix++) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'China UnionPay') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        }
      }
      if(length === 14) {
        ['38', '39'].forEach(function(prefix) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'Diner\'s Club') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        });
      }
      if(length === 15) {
        ['34', '37'].forEach(function(prefix) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'American Express') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        });
      }
      if(length === 16) {
        for(var prefix = 51; prefix <= 55; prefix++) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'MasterCard') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        }
      }
      if([13, 16, 19].includes(length)) {
        var prefix = 4;
        it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
          if(network === 'Visa') {
            detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
          } else {
            detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
          }
        });
      }
      if([16, 19].includes(length)) {
        ['65', '6011'].forEach(function(prefix) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'Discover') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        });
        for(var prefix = 644; prefix <= 649; prefix++) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'Discover') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        }
      }
      if([16, 18, 19].includes(length)) {
        ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'].forEach(function(prefix) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'Switch') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        });
      }
    })(length)
  }
});

describe('MasterCard', function() {
  var should = chai.should();
  var network = 'MasterCard';

  for(var length = 12; length <= 19; length++) {
    (function(length) {
      ['5018', '5020', '5038', '6304'].forEach(function(prefix) {
        it('has a prefix of ' + prefix + ' and a length of ' + length.toString(), function() {
          if(network === 'Maestro') {
            detectNetwork(prefix + addLength(length - prefix.length)).should.equal(network);
          } else {
            detectNetwork(prefix + addLength(length - prefix.length)).should.not.equal(network);
          }
        });
      });
      if(length >= 16) {
        for(var prefix = 622126; prefix <= 622295; prefix++) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'China UnionPay') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        }
        for(var prefix = 624; prefix <= 626; prefix++) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'China UnionPay') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        }
        for(var prefix = 6282; prefix <= 6288; prefix++) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'China UnionPay') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        }
      }
      if(length === 14) {
        ['38', '39'].forEach(function(prefix) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'Diner\'s Club') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        });
      }
      if(length === 15) {
        ['34', '37'].forEach(function(prefix) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'American Express') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        });
      }
      if(length === 16) {
        for(var prefix = 51; prefix <= 55; prefix++) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'MasterCard') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        }
      }
      if([13, 16, 19].includes(length)) {
        var prefix = 4;
        it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
          if(network === 'Visa') {
            detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
          } else {
            detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
          }
        });
      }
      if([16, 19].includes(length)) {
        ['65', '6011'].forEach(function(prefix) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'Discover') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        });
        for(var prefix = 644; prefix <= 649; prefix++) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'Discover') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        }
      }
      if([16, 18, 19].includes(length)) {
        ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'].forEach(function(prefix) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'Switch') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        });
      }
    })(length)
  }
});

describe('Discover', function() {
  var should = chai.should();
  var network = 'Discover';

  for(var length = 12; length <= 19; length++) {
    (function(length) {
      ['5018', '5020', '5038', '6304'].forEach(function(prefix) {
        it('has a prefix of ' + prefix + ' and a length of ' + length.toString(), function() {
          if(network === 'Maestro') {
            detectNetwork(prefix + addLength(length - prefix.length)).should.equal(network);
          } else {
            detectNetwork(prefix + addLength(length - prefix.length)).should.not.equal(network);
          }
        });
      });
      if(length >= 16) {
        for(var prefix = 622126; prefix <= 622295; prefix++) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'China UnionPay') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        }
        for(var prefix = 624; prefix <= 626; prefix++) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'China UnionPay') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        }
        for(var prefix = 6282; prefix <= 6288; prefix++) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'China UnionPay') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        }
      }
      if(length === 14) {
        ['38', '39'].forEach(function(prefix) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'Diner\'s Club') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        });
      }
      if(length === 15) {
        ['34', '37'].forEach(function(prefix) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'American Express') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        });
      }
      if(length === 16) {
        for(var prefix = 51; prefix <= 55; prefix++) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'MasterCard') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        }
      }
      if([13, 16, 19].includes(length)) {
        var prefix = 4;
        it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
          if(network === 'Visa') {
            detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
          } else {
            detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
          }
        });
      }
      if([16, 19].includes(length)) {
        ['65', '6011'].forEach(function(prefix) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'Discover') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        });
        for(var prefix = 644; prefix <= 649; prefix++) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'Discover') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        }
      }
      if([16, 18, 19].includes(length)) {
        ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'].forEach(function(prefix) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'Switch') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        });
      }
    })(length)
  }
});

describe('Maestro', function() {
  var should = chai.should();
  var network = 'Maestro';

  for(var length = 12; length <= 19; length++) {
    (function(length) {
      ['5018', '5020', '5038', '6304'].forEach(function(prefix) {
        it('has a prefix of ' + prefix + ' and a length of ' + length.toString(), function() {
          if(network === 'Maestro') {
            detectNetwork(prefix + addLength(length - prefix.length)).should.equal(network);
          } else {
            detectNetwork(prefix + addLength(length - prefix.length)).should.not.equal(network);
          }
        });
      });
      if(length >= 16) {
        for(var prefix = 622126; prefix <= 622295; prefix++) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'China UnionPay') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        }
        for(var prefix = 624; prefix <= 626; prefix++) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'China UnionPay') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        }
        for(var prefix = 6282; prefix <= 6288; prefix++) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'China UnionPay') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        }
      }
      if(length === 14) {
        ['38', '39'].forEach(function(prefix) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'Diner\'s Club') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        });
      }
      if(length === 15) {
        ['34', '37'].forEach(function(prefix) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'American Express') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        });
      }
      if(length === 16) {
        for(var prefix = 51; prefix <= 55; prefix++) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'MasterCard') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        }
      }
      if([13, 16, 19].includes(length)) {
        var prefix = 4;
        it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
          if(network === 'Visa') {
            detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
          } else {
            detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
          }
        });
      }
      if([16, 19].includes(length)) {
        ['65', '6011'].forEach(function(prefix) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'Discover') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        });
        for(var prefix = 644; prefix <= 649; prefix++) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'Discover') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        }
      }
      if([16, 18, 19].includes(length)) {
        ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'].forEach(function(prefix) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'Switch') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        });
      }
    })(length)
  }
});
describe('China UnionPay', function() {
  var should = chai.should();
  var network = 'China UnionPay';

  for(var length = 12; length <= 19; length++) {
    (function(length) {
      ['5018', '5020', '5038', '6304'].forEach(function(prefix) {
        it('has a prefix of ' + prefix + ' and a length of ' + length.toString(), function() {
          if(network === 'Maestro') {
            detectNetwork(prefix + addLength(length - prefix.length)).should.equal(network);
          } else {
            detectNetwork(prefix + addLength(length - prefix.length)).should.not.equal(network);
          }
        });
      });
      if(length >= 16) {
        for(var prefix = 622126; prefix <= 622295; prefix++) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'China UnionPay') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        }
        for(var prefix = 624; prefix <= 626; prefix++) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'China UnionPay') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        }
        for(var prefix = 6282; prefix <= 6288; prefix++) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'China UnionPay') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        }
      }
      if(length === 14) {
        ['38', '39'].forEach(function(prefix) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'Diner\'s Club') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        });
      }
      if(length === 15) {
        ['34', '37'].forEach(function(prefix) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'American Express') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        });
      }
      if(length === 16) {
        for(var prefix = 51; prefix <= 55; prefix++) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'MasterCard') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        }
      }
      if([13, 16, 19].includes(length)) {
        var prefix = 4;
        it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
          if(network === 'Visa') {
            detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
          } else {
            detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
          }
        });
      }
      if([16, 19].includes(length)) {
        ['65', '6011'].forEach(function(prefix) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'Discover') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        });
        for(var prefix = 644; prefix <= 649; prefix++) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'Discover') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        }
      }
      if([16, 18, 19].includes(length)) {
        ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'].forEach(function(prefix) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'Switch') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        });
      }
    })(length)
  }
});

describe('Switch', function() {
  var should = chai.should();
  var network = 'Switch';

  for(var length = 12; length <= 19; length++) {
    (function(length) {
      ['5018', '5020', '5038', '6304'].forEach(function(prefix) {
        it('has a prefix of ' + prefix + ' and a length of ' + length.toString(), function() {
          if(network === 'Maestro') {
            detectNetwork(prefix + addLength(length - prefix.length)).should.equal(network);
          } else {
            detectNetwork(prefix + addLength(length - prefix.length)).should.not.equal(network);
          }
        });
      });
      if(length >= 16) {
        for(var prefix = 622126; prefix <= 622295; prefix++) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'China UnionPay') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        }
        for(var prefix = 624; prefix <= 626; prefix++) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'China UnionPay') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        }
        for(var prefix = 6282; prefix <= 6288; prefix++) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'China UnionPay') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        }
      }
      if(length === 14) {
        ['38', '39'].forEach(function(prefix) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'Diner\'s Club') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        });
      }
      if(length === 15) {
        ['34', '37'].forEach(function(prefix) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'American Express') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        });
      }
      if(length === 16) {
        for(var prefix = 51; prefix <= 55; prefix++) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'MasterCard') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        }
      }
      if([13, 16, 19].includes(length)) {
        var prefix = 4;
        it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
          if(network === 'Visa') {
            detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
          } else {
            detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
          }
        });
      }
      if([16, 19].includes(length)) {
        ['65', '6011'].forEach(function(prefix) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'Discover') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        });
        for(var prefix = 644; prefix <= 649; prefix++) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'Discover') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        }
      }
      if([16, 18, 19].includes(length)) {
        ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'].forEach(function(prefix) {
          it('has a prefix of ' + prefix.toString() + ' and a length of ' + length.toString(), function() {
            if(network === 'Switch') {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.equal(network);
            } else {
              detectNetwork(prefix.toString() + addLength(length - prefix.toString().length)).should.not.equal(network);
            }
          });
        });
      }
    })(length)
  }
});
