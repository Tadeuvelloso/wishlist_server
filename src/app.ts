import express from "express";
import { getAllMovies } from "./controllers/allMovies.js";

const server = express();


server.get("/movies", getAllMovies);

server.listen(4000, () => {
    console.log("executando...")
})