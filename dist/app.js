import express from "express";
import { getAllMovies } from "./controllers/allMovies.js";
var server = express();
server.get("/health", function (req, res) {
    res.send("ok");
});
server.get("/movies", getAllMovies);
server.listen(4000, function () {
    console.log("executando...");
});
