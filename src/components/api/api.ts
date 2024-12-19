import axios from "axios";

const API_URL = "http://localhost:8080";

export interface Review {
    id: number;
    description: string;
    rating: number;
    reviewDate: string;
    userId: number;
    movieId: number;
}

// Agregar biografia
export interface Entity {
    id: number;
    name: string;
    photoUrl: string;
    dateOfBirth: string;
    country: string;
    biography?: string;
    dateOfDeath?: string;
    wikipediaLink?: string;
    movies?: Movie[];
    type: "actor" | "director";
}

export interface Actor extends Entity {
    type: "actor";
}

export interface Director extends Entity{
    type: "director";
}

export interface Movie {
    id: number;
    name: string;
    synopsis: string;
    country: string;
    releaseYear: string;
    genre: string;
    wikipediaLink: string;
    duration: string;
    directorId: number;
    photoUrl: string;
    trailerUrl: string;
    overviewUrl: string;
    type: "movie";
}

export interface User {
    id: number;
    username: string;
    email: string;
}

export interface CastByMovie {
    id: number;
    character: string;
    actorId: number;
}

export interface ActorWithCharacter extends Actor {
    character: string;
}


export const fetchActors = async (): Promise<Actor[]> => {
    const response = await axios.get<Actor[]>(API_URL + "/actor/all");
    return response.data.map(actor => ({ ...actor, type: "actor" }));
};

export const fetchMovies = async (): Promise<Movie[]> => {
    const response = await axios.get<Movie[]>(API_URL + "/movie/all");
    return response.data;
};

export const fetchDirectors = async (): Promise<Director[]> => {
    const response = await axios.get<Director[]>(API_URL + "/director/all");
    return response.data.map(director => ({ ...director, type: "director" }));
};

export const fetchDirectorById = async (id: number): Promise<Director> => {
    const response = await axios.get<Director>(API_URL + `/director/search/${id}`);
    return response.data;
};

export const fetchReviews = async (): Promise<Review[]> => {
    const response = await axios.get<Review[]>(API_URL + "/review/all");
    return response.data;
};

export const fetchUserById = async (id: number): Promise<User> => {
    const response = await axios.get<User>(`${API_URL}/user/${id}`);
    return response.data;
};

export const fetchMovieById = async (id: number): Promise<Movie> => {
    const response = await axios.get<Movie>(`${API_URL}/movie/find/${id}`);
    return response.data;
};

export const fetchBestMovies = async (): Promise<Movie[]> => {
    const response = await axios.get<Movie[]>(`${API_URL}/movie/best`);
    return response.data;
};

export const fetchMoviesByDirectorId = async (id: number): Promise<Movie[]> => {
    const response = await axios.get<Movie[]>(`${API_URL}/director/${id}/movies`);
    return response.data;
}

export const fetchMoviesByActorId = async (id: number): Promise<Movie[]> => {
    const response = await axios.get<Movie[]>(`${API_URL}/actor/${id}/movies`);
    return response.data;
}

export const fetchCastByMovieId = async (id: number): Promise<CastByMovie[]> => {
    const response = await axios.get<CastByMovie[]>(`${API_URL}/cast/movie/${id}`);
    return response.data;
};

export const fetchByActorId = async (id: number): Promise<Actor> => {
    const response = await axios.get<Actor>(`${API_URL}/actor/search/${id}`);
    return response.data;
}

export  const fetchActorByNames = async (name: string): Promise<Actor[]> => {
    const response = await axios.get<Actor[]>(`${API_URL}/actor/search/name/${name}`);
    return response.data;
}

export const fetchDirectorByNames = async (name: string): Promise<Director[]> => {
    const response = await axios.get<Director[]>(`${API_URL}/director/search/name/${name}`);
    return response.data;
}

export const fetchMoviesByActorName = async (name: string): Promise<Movie[]> => {
    const response = await axios.get<Movie[]>(`${API_URL}/movie/search/name/${name}`);
    return response.data;
}
