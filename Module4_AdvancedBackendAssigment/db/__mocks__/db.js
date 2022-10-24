const connect = () => {
    mongoose.connect("mongodb://localhost:27017/test", (err) => {
        // console.log("connected to Test DB");
    });
};

const addTrainer = async (newTrainer) => {
    console.log("Mocked");

    return Promise.resolve({
        name: "Alex Ruffner",
        specialty: "Functional strength training",
        YOE: 10,
    });
};

const findTrainer = async (object) => {
    console.log("Mocked find");

    return Promise.resolve([
        {
            name: "Alex Ruffner",
            specialty: "Functional strength training",
            YOE: 10,
        },
    ]);
};

const disconnect = () => {
    console.log("Mocked Disconnecting");
};

module.exports = { connect, addTrainer, findTrainer, disconnect };
