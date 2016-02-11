function parse(fileToParse) {
  var x = [];
  for (var i = 0; i < 9; i++) {
    var char = fileToParse.charAt(i);
    x.push(char);
  }
  x = x.toString();
  x = x.replace(/,/g, '');
  return x;
}

symbolToIntegerMap = {
  ' _ | ||_|': 0
};

module.exports.parse = parse;