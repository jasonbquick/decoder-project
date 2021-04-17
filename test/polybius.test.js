// Write your tests here!
const expect = require("chai").expect;
const {polybius} = require("../src/polybius");

describe("polybius encode tests", () => {
    it("should translate i and j to 42", () => {
        const message = "jiggle";
        const actual = polybius(message);
        const expected = "424222221351"
        expect(actual).to.equal(expected);
    })
    it("should ignore capital letters", () => {
        const message = "My Message";
        const actual = polybius(message);
        const expected = "2345 23513434112251";
        expect(actual).to.equal(expected);
    })
    it("should maintain spaces", () => {
        const message = "my message";
        const actual = polybius(message);
        const expected = "2345 23513434112251";
        expect(actual).to.equal(expected);
    })
})

describe("polybius decode tests" ,() => {
    it("translates 42 to i and j", () => {
        const message = "424222221351";
        const actual = polybius(message, false);
        expect(actual).to.include('i');
        expect(actual).to.include('j');
    })
    it("should maintain spaces", () => {
        const message = "2345 23513434112251";
        const actual = polybius(message, false);
        const expected = "my message";
        expect(actual).to.equal(expected)
    })
})