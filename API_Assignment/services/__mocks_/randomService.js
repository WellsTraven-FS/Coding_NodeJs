const axios = require("axios");
require("dotenv").config();

const getRandomApi = async () => {
    console.log("The Real Random");
    return await axios.get(`${process.env.URL}`);
};

const getRandomById = async (id) => {
    console.log("The Real Random");
    return await axios.get(`${process.env.URL} ${id}`);
};

module.exports = { getRandomApi, getRandomById };
