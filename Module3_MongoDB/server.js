const http = require("http");
const app = require("../Module3_MongoDB/app/app");
require("dotenv").config();

http.createServer(app).listen(process.env.port || 5000, () =>
    console.log(`Server running on port: ${process.env.port}`)
);
