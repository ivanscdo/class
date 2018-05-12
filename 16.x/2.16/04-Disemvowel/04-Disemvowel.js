var expect = require("chai").expect;

var disemvowel = function(str) {
  if (typeof str === "number") {
    return String(str);
  }
  return str.replace(/[aeiou]/gi, "");
};

module.exports = disemvowel;

describe("disemvowel", function() {
  it("should take a string, remove the vowels, and return the string without those vowels", function(){
    expect(disemvowel("string")).to.equal("strng");
  });
})