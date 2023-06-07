const PORT = 3001;
const http = require("http");
const { getCharById } = require("./controllers/getCharById")


http.createServer((request, response) => {
    console.log("server raised in the port " + PORT);
    const url = request.url;
    response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

    if(url.includes("/rickandmorty/character")){
        const urlArray = url.split("/");
        const id = urlArray[urlArray.length - 1];
        getCharById(response, id)
    }

}).listen(PORT, "localhost")