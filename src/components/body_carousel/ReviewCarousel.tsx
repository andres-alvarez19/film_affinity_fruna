// src/components/body_carousel/ReviewCarousel.tsx
import React from "react";
import GenericCarousel from "../body_carousel/GenericCarousel";
import ReviewOverlay from "../overlay/ReviewOverlay";

const reviews = [
    { id: 1, reviewer: "John Doe", reviewText: "Great movie!", rating: 5, movieTitle: "Top Gun", posterUrl: "https://via.placeholder.com/150x200?text=Top+Gun" },
    { id: 2, reviewer: "Jane Smith", reviewText: "Not bad, but could be better.", rating: 3, movieTitle: "The Godfather", posterUrl: "https://via.placeholder.com/150x200?text=The+Godfather" },
    { id: 3, reviewer: "Alice Johnson", reviewText: "I loved it!", rating: 4, movieTitle: "Inception", posterUrl: "https://via.placeholder.com/150x200?text=Inception" },
    { id: 4, reviewer: "Bob Brown", reviewText: "It was okay.", rating: 3, movieTitle: "Forrest Gump", posterUrl: "https://via.placeholder.com/150x200?text=Forrest+Gump" },
    { id: 5, reviewer: "Charlie Davis", reviewText: "Amazing experience!", rating: 5, movieTitle: "Training Day", posterUrl: "https://via.placeholder.com/150x200?text=Training+Day" },
];

const ReviewCarousel: React.FC = () => {
    return (
        <GenericCarousel
            items={reviews}
            renderItem={(review) => (
                <ReviewOverlay
                    reviewer={review.reviewer}
                    reviewText={review.reviewText}
                    rating={review.rating}
                    movieTitle={review.movieTitle}
                    posterUrl={review.posterUrl}
                />
            )}
            title="Reseñas"
            bgColor={"bg-gray-200"}
        />
    );
};

export default ReviewCarousel;