function parse (fileToParse) {
  var lines = fileToParse.split('\n');
  var lineLength = lines[ 0 ].length;
  var symbol = '';
  var accountNumber = [];

  for (var i = 0; i < lineLength; i += 3) {
    for (var line = 0; line < 3; line++) {
      symbol += lines[ line ].substr(i, 3);
    }
    accountNumber.push(symbolToIntegerMap[ symbol ]);
    symbol = '';
  }

  if (isValid(accountNumber)) {
    return accountNumber.join('');
  }
  return accountNumber.join('') + ' ERR';
}

function isValid (accountNumber) {
  var checkSum = 0;

  var counter = 9;
  for (var i = 0; i < accountNumber.length; i++) {
    checkSum += counter * accountNumber[ i ];
    counter--;
  }
  return checkSum % 11 === 0;
}

const symbolToIntegerMap = {
  ' _ | ||_|': 0,
  '     |  |': 1,
  ' _  _||_ ': 2,
  ' _  _| _|': 3,
  '   |_|  |': 4,
  ' _ |_  _|': 5,
  ' _ |_ |_|': 6,
  ' _   |  |': 7,
  ' _ |_||_|': 8,
  ' _ |_| _|': 9
};

module.exports.parse = parse;