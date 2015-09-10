describe("romanNumeral", function() {
  it("returns roman numeral I for 1", function() {
    expect(romanNumeral(1)).to.equal("I");
  });
  it("returns roman numerals for a number (without exceptions of IIII, for example)", function() {
    expect(romanNumeral(27)).to.equal("XXVII");
    expect(romanNumeral(2)).to.equal("II");
    expect(romanNumeral(66)).to.equal("LXVI");
  });

  it("it doesn't accept numbers over 3,999", function() {
    expect(romanNumeral(4000)).to.equal("Numbers over 3,999 don't exist.");
  });  
});
