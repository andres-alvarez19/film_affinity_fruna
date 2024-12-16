import React from 'react';

interface ReviewProps {
    reviewer: string;
    reviewText: string;
    rating: number;
    movieTitle: string;
    posterUrl: string;
}

const ReviewOverlay: React.FC<ReviewProps> = ({ reviewer, reviewText, rating, movieTitle, posterUrl }) => {
    return (
        <div
            className="flex items-start min-w-80 space-y-1 hover:shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out rounded-xl"
        >
            <div className="flex flex-col w-full m-2 bg-white rounded">
                <div className="flex flex-row">
                    <div className="flex pb-0 p-2 pr-0">
                        <img
                            src={`http://localhost:8080${posterUrl}`}
                            alt={`Poster of ${movieTitle}`}
                            className="h-48 w-36 mb-0 rounded-lg object-cover"
                        />
                    </div>
                    <div className="flex flex-col flex-grow p-3 pr-0 pb-0">
                        <p className="text-lg align-top ml-0 m-3 mt-1 break-words italic font-normal w-48">"{reviewText}"</p>
                        <div className="flex flex-col mt-auto">
                            <h2 className="font-bold text-sm mr-2">{reviewer}</h2>
                            <div className="text-sm flex">
                                <span className="font-bold">{rating}</span>
                                <span className="ml-1">/ 10</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pl-3 py-2">
                    <h2 className="font-bold text-lg ">{movieTitle}</h2>
                </div>
            </div>
        </div>
    );
};

export default ReviewOverlay;