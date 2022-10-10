const axios = require("axios");
require("dotenv").config();

const getRandomApi = async () => {
    console.log("The Real Random");
    return await axios.get(`${process.env.URL}`);
};

const getRandomByName = async (name) => {
    console.log("The Real Random");
    return await axios.get(`${process.env.URL} ${name}`);
};

const getRandomById = async (id) => {
    console.log("The Real Random");
    return await axios.get(`${process.env.URL} ${id}`);
};

module.exports = { getRandomApi, getRandomByName, getRandomById };
