import { Request, Response } from "express";

let valor: string = "12";
let number: number = 12;
let bool: boolean = true;


function getAllMovies (req: Request, res: Response){
    res.send("allmovies")
}

export {
    getAllMovies,
}