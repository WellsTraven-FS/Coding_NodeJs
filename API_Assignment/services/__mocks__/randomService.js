const getRandomApi = async () => {
    console.log("The Real Random");
    return Promise.resolve({
        data: {
            error: false,
            category: "Pun",
            type: "twopart",
            setup: "Why did the koala get rejected?",
            delivery: "Because he did not have any koalafication.",
            flags: {
                nsfw: false,
                religious: false,
                political: false,
                racist: false,
                sexist: false,
                explicit: false,
            },
            id: 192,
            safe: true,
            lang: "en",
        },
    });
};

const getRandomById = async (id) => {
    console.log("The Real Random");
    return Promise.resolve({
        data: {
            error: false,
            category: "Pun",
            type: "twopart",
            setup: "Why did the koala get rejected?",
            delivery: "Because he did not have any koalafication.",
            flags: {
                nsfw: false,
                religious: false,
                political: false,
                racist: false,
                sexist: false,
                explicit: false,
            },
            id: 192,
            safe: true,
            lang: "en",
        },
    });
};

module.exports = { getRandomApi, getRandomById };
