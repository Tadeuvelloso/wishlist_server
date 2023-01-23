import express from "express";
import movieroute from "./routes/movies.rote.js";
import cors from "cors";
var server = express();
server.use(cors);
server.use(express.json());
server.use(movieroute);
server.get("/heath", function (req, res) {
    res.send("alou");
});
server.listen(5000, function () {
    console.log("executando.....");
});
