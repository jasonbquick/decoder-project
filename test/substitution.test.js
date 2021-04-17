// Write your tests here!
const expect = require("chai").expect;
const {substitution} = require("../src/substitution");

describe("substitution errors", () => {
    it("should return false if alphabet is not 26 characters", () => {
        const message = "message";
        const alphabet = "short";
        const actual = substitution(message, alphabet);
        expect(actual).to.be.false
    })
    it("should return false if alphabet is not unique", () => {
        const message = "message";
        const alphabet = "abcabcabcabcabcabcabcabcab";
        const actual = substitution(message, alphabet);
        expect(actual).to.be.false
    })
})
describe("encoding tests", () => {
    it("should ignore capital letters", () => {
        const message = "Message";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(message, alphabet);
        const expected = "ykrrpik"
        expect(actual).to.equal(expected)
    })
    it("should maintain spaces", () => {
        const message = "my message";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl"
        const actual = substitution(message, alphabet);
        const expected = "yp ysii.rs";
        expect(actual).to.equal(expected);
    })
    it("correctly encodes", () => {
        const message = "message";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet);
        const expected = "ysii.rs";
        expect(actual).to.equal(expected);
    })
})
describe("decoding tests", () => {
    it("should correctly decode", () => {
        const message = "ysii.rs";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet, false);
        const expected = "message";
        expect(actual).to.equal(expected);
    })
    it("should maintain spaces", () => {
        const message = "yp ysii.rs";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet, false);
        const expected = "my message";
        expect(actual).to.equal(expected);
    })
    it("should ignore capital letters", () => {
        const message = "Ysii.Rs";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet, false);
        const expected = "message";
        expect(actual).to.equal(expected);
    })
})
