const axios = require("axios").default;
require("dotenv").config();

const getRandomUser = async () => {
    console.log("The Real User");
    return await axios.get(`${process.env.URL}`);
};

const getRandomUserById = async (id) => {
    console.log("The Real User");
    return await axios.get(`${process.env.URL} ${id}`);
};

module.exports = { getRandomUser, getRandomUserById };
