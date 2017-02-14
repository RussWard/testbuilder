
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

var detectNetworkTest = function(network) {
  describe(network, function() {
    var should = chai.should();

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
          var prefix = '4';
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
}

detectNetworkTest('Diner\'s Club');
detectNetworkTest('American Express');
detectNetworkTest('Visa');
detectNetworkTest('MasterCard');
detectNetworkTest('Discover');
detectNetworkTest('Maestro');
detectNetworkTest('China UnionPay');
detectNetworkTest('Switch');

