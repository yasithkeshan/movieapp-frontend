import React from "react";
import MovieCard from "./moviecard";

import H1 from "../assets/img/h1.jpg";
import H2 from "../assets/img/h2.png";
import H3 from "../assets/img/h3.jpg";
import H4 from "../assets/img/h4.png";
import H5 from "../assets/img/h5.png";

const movies = [
  {
    id: 1,
    title: "Harry Potter and the Philosopher's Stone",
    image: H1,
    hoverImage: H4,
    releaseDate: "2023",
    rating: 5,
    duration: "2h 15m",
  },
  {
    id: 2,
    title: "Harry Potter and the Chamber of Secrets",
    image: H2,
    hoverImage: H5,
    releaseDate: "2023",
    rating: 4.5,
    duration: "1h 50m",
  },
  {
    id: 3,
    title: "Movie 3",
    image: H3,
    hoverImage: H4,
    releaseDate: "2024",
    rating: 4.2,
    duration: "2h 30m",
  },
  {
    id: 4,
    title: "Movie 4",
    image: H4,
    hoverImage: H5,
    releaseDate: "2025",
    rating: 4,
    duration: "1h 45m",
  },
  {
    id: 5,
    title: "Movie 5",
    image: H5,
    hoverImage: H1,
    releaseDate: "2022",
    rating: 1,
    duration: "2h 10m",
  },
];

const MovieGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-4 sm:px-6 lg:px-8">
      <div className="flex row-span-5 gap-4 flex-nowrap">
        {movies.map((movie) => (
          <MovieCard movie={movie}/>
        ))}
      </div>
    </div>
  );
};

export default MovieGrid;
