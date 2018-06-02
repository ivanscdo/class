var expect = require("chai").expect;
var multiply = require("../src/multiply");

describe("Multiply", function() {
    it("should multiply properly when passed numbers", function() {
        expect(multiply(2, 4)).to.equal(8);
    });
});