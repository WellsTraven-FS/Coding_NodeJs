const {
    uppercase,
    lowercase,
    add,
    substract,
    multiply,
    divide,
    squareRoot,
    max,
} = require("./string");

describe("Testing the string module", () => {
    test("should uppercase a string input", () => {
        expect(uppercase("bob")).toBe("BOB");
    });

    test("should lowercase a string input", () => {
        expect(lowercase("RICHARD")).toBe("richard");
    });

    test("/", () => {
        expect(add(1, 1));
    });

    test("/", () => {
        expect(substract(2, 2));
    });

    test("/", () => {
        expect(multiply(4, 4));
    });

    test("/", () => {
        expect(divide(100, 2));
    });
    test("/", () => {
        expect(squareRoot(20));
    });

    test("/", () => {
        expect(max(22, 120));
    });
});
