import React from 'react';
import Carousel from "../components/Carousel.tsx";
import ActorCarousel from "../components/ActorCarousel.tsx";

const Home: React.FC = () => {
    return (
    <div className="flex-auto w-full max-w-screen-lg mx-auto border-gray-500">
        <Carousel />
        <ActorCarousel/>
    </div>
);
};

export default Home;