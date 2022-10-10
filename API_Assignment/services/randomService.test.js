const { getRandomApi, getRandomById } = require("./randomService");
jest.mock("./randomService");

describe("Random Service Test", () => {
    test("As user I should return randoms", async () => {
        const result = await getRandomApi();
        expect(result.data.error).toEqual(false);
        expect(result.data.lang).toEqual("en");
        expect(result.data.safe).toEqual(true);
        expect(result.data.flags.explicit).toEqual(false);
        expect(result.data.flags.racist).toEqual(false);
    });
    test("As user I should return randoms by id", async () => {
        const result = await getRandomById();
        expect(result.data.error).toEqual(false);
        expect(result.data.lang).toEqual("en");
    });
});
