const http = require("http");
const express = require("express");
const routes = require('./routes/routes');


const app = express();

const hostname = "127.0.0.1";
const port = 3003;

app.set("port", port);

app.use(express.json());

app.use("/api", routes);

app.use((request,response,next) => {
    response.status(404).send();
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Servidor em execução em http://${hostname}:${port}`)
}); 