import React from 'react';
import Carousel from "../components/Carousel.tsx";
import ActorCarousel from "../components/body_carousel/ActorCarousel.tsx";
import MovieCarousel from "../components/body_carousel/MovieCarousel.tsx";
import ReviewCarousel from "../components/body_carousel/ReviewCarousel.tsx";
import RatedMoviesCarousel from "../components/body_carousel/RatedMoviesCarousel.tsx";
import DirectorCarousel from "../components/body_carousel/DirectorCarousel.tsx";
import ForYou from "../components/body_carousel/ForYou.tsx";

const Home: React.FC = () => {
    return (
    <div className="flex-auto w-full max-w-screen-lg mx-auto border-gray-500">
        <Carousel />
        <ActorCarousel/>
        <MovieCarousel/>
        <ReviewCarousel/>
        <RatedMoviesCarousel/>
        <DirectorCarousel/>
        <ForYou/>
    </div>
);
};

export default Home;