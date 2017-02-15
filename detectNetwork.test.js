
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
        ['5018', '5020', '5038', '6304'].forEach(function(maestPrefix) {
          it('has a prefix of ' + maestPrefix + ' and a length of ' + length.toString(), function() {
            if(network === 'Maestro') {
              //console.log(maestPrefix + addLength(length - maestPrefix.length));
              detectNetwork(maestPrefix + addLength(length - maestPrefix.length)).should.equal(network);
            } else {
              detectNetwork(maestPrefix + addLength(length - maestPrefix.length)).should.not.equal(network);
            }
          });
        });
        if(length >= 16) {
          for(var china6Prefix = 622126; china6Prefix < 622295; china6Prefix++) {
            it('has a prefix of ' + china6Prefix.toString() + ' and a length of ' + length.toString(), function() {
              if(network === 'China UnionPay') {
                //console.log(china6Prefix.toString() + addLength(length - china6Prefix.toString().length));
                detectNetwork(china6Prefix.toString() + addLength(length - china6Prefix.toString().length)).should.equal(network);
              } else {
                detectNetwork(china6Prefix.toString() + addLength(length - china6Prefix.toString().length)).should.not.equal(network);
              }
            });
          }
          for(var china3Prefix = 624; china3Prefix < 626; china3Prefix++) {
            it('has a prefix of ' + china3Prefix.toString() + ' and a length of ' + length.toString(), function() {
              if(network === 'China UnionPay') {
                console.log(china3Prefix.toString() + addLength(length - china3Prefix.toString().length));
                detectNetwork(china3Prefix.toString() + addLength(length - china3Prefix.toString().length)).should.equal(network);
              } else {
                detectNetwork(china3Prefix.toString() + addLength(length - china3Prefix.toString().length)).should.not.equal(network);
              }
            });
          }
          for(var china4Prefix = 6282; china4Prefix < 6288; china4Prefix++) {
            it('has a prefix of ' + china4Prefix.toString() + ' and a length of ' + length.toString(), function() {
              if(network === 'China UnionPay') {
                detectNetwork(china4Prefix.toString() + addLength(length - china4Prefix.toString().length)).should.equal(network);
              } else {
                detectNetwork(china4Prefix.toString() + addLength(length - china4Prefix.toString().length)).should.not.equal(network);
              }
            });
          }
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
          for(var mcPrefix = 51; mcPrefix < 55; mcPrefix++) {
            it('has a prefix of ' + mcPrefix.toString() + ' and a length of ' + length.toString(), function() {
              if(network === 'MasterCard') {
                detectNetwork(mcPrefix.toString() + addLength(length - mcPrefix.toString().length)).should.equal(network);
              } else {
                detectNetwork(mcPrefix.toString() + addLength(length - mcPrefix.toString().length)).should.not.equal(network);
              }
            });
          }
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
          for(var disc3Prefix = 644; disc3Prefix < 649; disc3Prefix++) {
            it('has a prefix of ' + disc3Prefix.toString() + ' and a length of ' + length.toString(), function() {
              if(network === 'Discover') {
                detectNetwork(disc3Prefix.toString() + addLength(length - disc3Prefix.toString().length)).should.equal(network);
              } else {
                detectNetwork(disc3Prefix.toString() + addLength(length - disc3Prefix.toString().length)).should.not.equal(network);
              }
            });
          }
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

