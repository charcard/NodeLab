"use strict";

const http = require("http");
const random = require("./random");
http.createServer((request, response) => {
    response.writeHead(200, {
        "Content-type": "text/plain"
    });
    response.write(random());
    response.end();
}).listen(3000);

