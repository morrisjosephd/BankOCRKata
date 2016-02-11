var subject = require('./../bank-ocr.js');
var should = require('chai').should();

describe ('A reading machine', function () {

  describe('scans a file', function () {

    it('should parse zero', function () {
      var stringToParse =
        " _ " +
        "| |" +
        "|_|";
      subject.parse(stringToParse).should.eq(0);
    });

    it('should parse ones', function () {
      var stringToParse =
        "   " +
        "  |" +
        "  |";
      subject.parse(stringToParse).should.eq(1);
    });

    it('should parse twos', function () {
      var stringToParse =
        " _ " +
        " _|" +
        "|_ ";
      subject.parse(stringToParse).should.eq(2);
    });

    it('should parse threes', function () {
      var stringToParse =
        " _ " +
        " _|" +
        " _|";
      subject.parse(stringToParse).should.eq(3);
    });

    it('should parse fours', function (){
      var stringToParse =
        "   " +
        "|_|" +
        "  |";
      subject.parse(stringToParse).should.eq(4);
    });

    it('should parse fives', function() {
      var stringToParse =
        " _ " +
        "|_ " +
        " _|";
      subject.parse(stringToParse).should.eq(5);
    });

    it('should parse sixes', function() {
      var stringToParse =
        " _ " +
        "|_ " +
        "|_|";
      subject.parse(stringToParse).should.eq(6);
    });

    it('should parse sevens', function() {
      var stringToParse =
        " _ " +
        "  |" +
        "  |";
      subject.parse(stringToParse).should.eq(7);
    });

    it('should parse eights', function() {
      var stringToParse =
        " _ " +
        "|_|" +
        "|_|";
      subject.parse(stringToParse).should.eq(8);
    });
    
    it('should parse nines', function() {
      var stringToParse =
        " _ " +
        "|_|" +
        " _|";
      subject.parse(stringToParse).should.eq(9);
    });

  });

});