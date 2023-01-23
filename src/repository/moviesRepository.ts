import { connection } from "../database/db.js";
import { Movie } from "../protocols/Movie.js";
import { QueryResult } from "pg";

async function insertMovie(movie: Movie): Promise<QueryResult> {
   return connection.query(`INSERT INTO movies (genre, name, platform, description, watched, entity) VALUES ($1, $2, $3, $4, $5, $6);`,[movie.genre, movie.name, movie.platform, movie.description, movie.watched, movie.entity])
}

async function updateMovie(movie: Movie): Promise<QueryResult> {
    return connection.query(`UPDATE movies SET description=$1, watched=$2 WHERE name=$3;`, [movie.description, movie.watched, movie.name]);
}

async function findAllMovies(): Promise<QueryResult<Movie>> {
    return connection.query(`SELECT * FROM movies;`)
}

async function findMovieByGenre(genre: string): Promise<QueryResult<Movie>> {
    return connection.query(`SELECT * FROM movies WHERE genre=$1;`, [genre])
}

async function deleteMovieById(id: number) {
    return connection.query(`DELETE FROM movies WHERE id=$1;`, [id])
}

export {
    insertMovie,
    findAllMovies,
    updateMovie,
    findMovieByGenre,
    deleteMovieById
}