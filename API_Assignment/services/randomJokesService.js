const axios = require("axios");
require("dotenv").config();

const getRandomUser = async () => {
    console.log("The Real Random");
    return await axios.get(`${process.env.URL}`);
};

// const getRandomByName = async (name) => {
//     console.log("The Real Random");
//     return await axios.get(`${process.env.URL} ${name}`);
// };

const getRandomById = async (id) => {
    console.log("The Real Random");
    return await axios.get(`${process.env.URL} ${id}`);
};

module.exports = { getRandomUser, getRandomById };
