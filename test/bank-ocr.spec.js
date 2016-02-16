var should = require('chai').should();
var subject = require('./../bank-ocr.js');

describe('A reading machine', function () {

  describe('scans a number', function () {

    xit('should parse zero', function () {
      var stringToParse =
        " _ \n" +
        "| |\n" +
        "|_|\n";
      subject.parse(stringToParse).should.eq('0');
    });

    xit('should parse ones', function () {
      var stringToParse =
        "   \n" +
        "  |\n" +
        "  |\n";
      subject.parse(stringToParse).should.eq('1');
    });

    xit('should parse twos', function () {
      var stringToParse =
        " _ \n" +
        " _|\n" +
        "|_ \n";
      subject.parse(stringToParse).should.eq('2');
    });

    xit('should parse threes', function () {
      var stringToParse =
        " _ \n" +
        " _|\n" +
        " _|\n";
      subject.parse(stringToParse).should.eq('3');
    });

    xit('should parse fours', function () {
      var stringToParse =
        "   \n" +
        "|_|\n" +
        "  |\n";
      subject.parse(stringToParse).should.eq('4');
    });

    xit('should parse fives', function () {
      var stringToParse =
        " _ \n" +
        "|_ \n" +
        " _|\n";
      subject.parse(stringToParse).should.eq('5');
    });

    xit('should parse sixes', function () {
      var stringToParse =
        " _ \n" +
        "|_ \n" +
        "|_|\n";
      subject.parse(stringToParse).should.eq('6');
    });

    xit('should parse sevens', function () {
      var stringToParse =
        " _ \n" +
        "  |\n" +
        "  |\n";
      subject.parse(stringToParse).should.eq('7');
    });

    xit('should parse eights', function () {
      var stringToParse =
        " _ \n" +
        "|_|\n" +
        "|_|\n";
      subject.parse(stringToParse).should.eq('8');
    });

    xit('should parse nines', function () {
      var stringToParse =
        " _ \n" +
        "|_|\n" +
        " _|\n";
      subject.parse(stringToParse).should.eq('9');
    });

  });

  describe('scans an account number', function () {

    it('should parse 123456789', function () {
      var stringToParse =
        "    _  _     _  _  _  _  _ \n" +
        "  | _| _||_||_ |_   ||_||_|\n" +
        "  ||_  _|  | _||_|  ||_| _|\n" +
        "";
      subject.parse(stringToParse).should.eq('123456789');
    });

    it('should parse 000000051', function () {
      var stringToParse =
        " _  _  _  _  _  _  _  _    \n" +
        "| || || || || || || ||_   |\n" +
        "|_||_||_||_||_||_||_| _|  |\n" +
        "";
      subject.parse(stringToParse).should.eq('000000051');
    });

    describe('validating an account number with a checksum', function () {

      it('should return account number with ERR appended for failed checksum', function () {
        var stringToParse =
          "    _  _  _  _  _  _  _  _ \n" +
          "  || || || || || || || || |\n" +
          "  ||_||_||_||_||_||_||_||_|\n" +
          "";
        subject.parse(stringToParse).should.eq('100000000 ERR');
      });

    });

  });

});