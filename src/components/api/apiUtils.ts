import { fetchMovies, fetchBestMovies, fetchDirectorById, Movie, Director } from "./api.ts";

export const getMoviesWithDirectors = async (fetchMoviesFn: () => Promise<Movie[]>): Promise<{ movies: Movie[], directors: { [key: number]: Director } }> => {
    const movies = await fetchMoviesFn();
    const directors: { [key: number]: Director } = {};

    for (const movie of movies) {
        directors[movie.id] = await fetchDirectorById(movie.directorId);
    }

    return { movies, directors };
};

export const allMoviesWithDirectors = await getMoviesWithDirectors(fetchMovies);
export const bestMoviesWithDirectors = await getMoviesWithDirectors(fetchBestMovies);