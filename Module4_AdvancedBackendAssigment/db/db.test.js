const { connect, addTrainer, findTrainer, disconnect } = require("./db");
const Trainer = require("../api/model/trainer");
jest.mocked("./db");

describe("Test Functions", () => {
    beforeAll(() => {
        connect();
    });
    test("User want to add a trainer.", async () => {
        const newTrainer = new Trainer({
            name: "Alex Ruffner",
            specialty: "Functional strength training",
            YOE: "10",
        });
        const trainer = await addTrainer(newTrainer);
        expect(trainer.name).toEqual("Alex Ruffner");
        expect(trainer.specialty).toEqual("Functional strength training");
    });

    test("Employer wants to find the employee", async () => {
        const trainer = await findTrainer({
            name: "Alex Ruffner",
            specialty: "Functional strength training",
            YOE: 10,
        });

        expect(trainer[0].name).toEqual("Alex Ruffner");
        expect(trainer[0].specialty).toEqual("Functional strength training");
        expect(trainer[0].YOE).toEqual(10);
    });
    afterAll(() => {
        disconnect();
    });
});
