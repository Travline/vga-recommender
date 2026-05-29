import type { Movie } from "../models/Movie";
import { movies } from "./pelis"

export const getAllMovies: () => Promise<Movie[]> = async () => {
  return movies
}

export const getAllGenres: () => Promise<string[]> = async () => {
  return [...new Set(movies.flatMap(movie => movie.generos))];
}

export const getMoviesByGenre: (genre: string) => Promise<Movie[]> = async (genre: string) => {
  return movies.filter((movie) => movie.generos.includes(genre))
}