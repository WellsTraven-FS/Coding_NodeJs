const http = require("http");
const app = require("./app/app");

http.createServer(app).listen(6000, () => {
    console.log("Server running on Port: 6000");
});
