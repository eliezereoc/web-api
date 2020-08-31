const http = require("http");
const express = require("express");
const status = require("http-status");
const routes = require('./routes/routes');
const sequelize = require("./database/database");


const app = express();

// const hostname = "127.0.0.1";
// const port = 3003;
// app.set("port", port);

app.use(express.json());

app.use("/api", routes);

app.use((request,response,next) => {
    response.status(status.NOT_FOUND).send();
});

app.use((error, request, response,next) => {
    response.status(status.INTERNAL_SERVER_ERROR).json({ error });
});

// const server = http.createServer(app);
// server.listen(port, hostname, () => {
//     console.log(`Servidor em execução em http://${hostname}:${port}`)
// }); 

sequelize.sync({ force: true }).then(() => {
    const port = process.env.PORT || 3000;  
    app.set("port", port);  
    const server = http.createServer(app);  
    server.listen(port);
});