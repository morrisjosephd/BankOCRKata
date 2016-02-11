function parse (fileToParse) {
  var x = [];
  for (var i = 0; i < 9; i++) {
    var char = fileToParse.charAt(i);
    x.push(char);
  }
  x = x.toString();
  x = x.replace(/,/g, '');
  return symbolToIntegerMap[x];

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