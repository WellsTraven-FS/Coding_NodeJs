const axios = require("axios");
require("dotenv").config();

const getRandomApi = async () => {
    console.log("Mock Random");
    return await axios.get(`${process.env.URL}`);
};

const getRandomById = async (id) => {
    console.log("Mock Random by Id");
    return await axios.get(`${process.env.URL} ${id}`);
};

module.exports = { getRandomApi, getRandomById };
