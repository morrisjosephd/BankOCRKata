var subject = require('./../bank-ocr.js');
var should = require('chai').should();
var fs = require('fs');

describe ('A reading machine', function () {

  describe('scans a file', function() {

    //it('should parse zeros', function() {
    //  var fileToParse = fs.readFileSync('./bank-ocr.txt', 'UTF-8');
    //  var newArray = subject.parse(fileToParse);
    //  console.log(newArray);
    //  subject.parse(fileToParse).should.eq(0);
    //});

    it('should parse zero', function () {
      var stringToParse =
        " _ " +
        "| |" +
        "|_|";
      var newArray = subject.parse(stringToParse);
      console.log(newArray);
      subject.parse(stringToParse).should.eq(0);
    });
    it('should parse ones');
    it('should parse twos');
    it('should parse threes');
    it('should parse fours');
    it('should parse fives');
    it('should parse sixes');
    it('should parse sevens');
    it('should parse eights');
    it('should parse nines');

  });

});