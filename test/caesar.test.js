// Write your tests here!
const expect = require("chai").expect;
const {caesar} = require("../src/caesar");

describe("caesar test", () => {
    it("should return false if shift is zero", () => {
        const message = "zebra magazine";
        const shift = 0;
       const actual = caesar(message, shift);
       expect(actual).to.be.false;
    })
    it("should return false if shift is above 25", () => {
        const message = "zebra magazine";
        const shift = 26;
        const actual = caesar(message, shift);
        expect(actual).to.be.false;
    })
    it("should return false if shift is under -25", () => {
        const message = "zebra magazine";
        const shift = -26;
        const actual = caesar(message, shift);
        expect(actual).to.be.false;
    })
    it("should return false if no shift", () => {
        const message = "zebra magazine";
        const shift = null;
        const actual = caesar(message, shift);
        expect(actual).to.be.false;
    })
    it("should ignore capital letters", () => {
        const message = "A message";
        const shift = 3;
        const actual = caesar(message, shift);
        const expected = "d phvvdjh";
        expect(actual).to.equal(expected);
    })
    it("wraps around alphabet", () => {
        const message = "zebra magazine";
        const shift = -3;
        const actual = caesar(message, shift);
        const expected = "wbyox jxdxwfkb";
        expect(actual).to.equal(expected);
    })
    it("maintains spaces and nonletters while encoding", () => {
        const message = "a message."
        const shift = 3;
        const actual = caesar(message, shift);
        const expected = "d phvvdjh.";
        expect(actual).to.equal(expected);
    })
    it("maintains spaces and nonletters while decoding", () => {
        const message = "d phvvdjh."
        const shift = 3;
        const actual = caesar(message, shift, false);
        const expected = "a message.";
        expect(actual).to.equal(expected);
    })
})