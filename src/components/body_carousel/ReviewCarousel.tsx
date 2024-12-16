import React, { useEffect, useState } from "react";
import GenericCarousel from "./GenericCarousel";
import ReviewOverlay from "../overlay/ReviewOverlay";
import { fetchReviews, fetchUserById, fetchMovieById, Review, User, Movie } from "../api/api.ts";

const ReviewCarousel: React.FC = () => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [users, setUsers] = useState<{ [key: number]: User }>({});
    const [movies, setMovies] = useState<{ [key: number]: Movie }>({});

    useEffect(() => {
        const getReviews = async () => {
            try {
                const data = await fetchReviews();
                setReviews(data);

                const userPromises = data.map(review => fetchUserById(review.userId));
                const moviePromises = data.map(review => fetchMovieById(review.movieId));

                const users = await Promise.all(userPromises);
                const movies = await Promise.all(moviePromises);

                const usersMap = users.reduce((acc, user) => {
                    acc[user.id] = user;
                    return acc;
                }, {} as { [key: number]: User });

                const moviesMap = movies.reduce((acc, movie) => {
                    acc[movie.id] = movie;
                    return acc;
                }, {} as { [key: number]: Movie });

                setUsers(usersMap);
                setMovies(moviesMap);
            } catch (error) {
                setError("There was an error fetching the reviews!");
                console.error(error);
            }
        };

        void getReviews();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <GenericCarousel
            items={reviews}
            renderItem={(review) => {
                const user = users[review.userId];
                const movie = movies[review.movieId];
                return (
                    <ReviewOverlay
                        reviewer={user ? user.username: "Unknown"}
                        reviewText={review.description}
                        rating={review.rating}
                        movieTitle={movie ? movie.name : "Unknown"}
                        posterUrl={movie ? movie.photoUrl: "https://via.placeholder.com/150x200?text=Movie+Poster"}
                    />
                );
            }}
            title="Reseñas"
            bgColor={"bg-gray-200"}
        />
    );
};

export default ReviewCarousel;