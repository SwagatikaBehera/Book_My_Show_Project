import React, { useContext, useState } from "react";

// Component
import PaymentModal from "../PaymentModel/Payment.component";

// Context
import { MovieContext } from "../../Context/movie.context";

const MovieInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(0);

  const { movie } = useContext(MovieContext);

  const genres = movie.genres?.map(({ name }) => name).join(", "); // Optional chaining
  const spoken_languages = movie.spoken_languages
    ?.map(({ name }) => name)
    .join(", ");

  const rentMovies = () => {
    setIsOpen(true);
    setPrice(149);
  };

  const buyMovies = () => {
    setIsOpen(true);
    setPrice(749);
  };

  return (
    <>
      <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
      <div className="flex flex-col gap-3  lg:gap-8">
        <div className="flex items-center gap-3 md:px-4">
          <div className="w-40 h-8">
            <img
              src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
              alt="premier"
              className="w-full h-full"
            />
          </div>
          <span className=" bg-navGrey-600 text-white text-lg p-1 rounded-3xl">
            Streaming Now
          </span>
        </div>

        <h1 className="hidden lg:block text-white text-4xl ml-3 font-bold">
          {movie.original_title}
        </h1>

        <div className="flex flex-col-reverse gap-3 lg:flex-col">
          <div className="text-white font-light flex flex-col gap-2 md:px-4">
            <h4>
              {movie.original_language} &bull; {spoken_languages} &bull;
              Subtitles(1)
            </h4>
            <h4>
              {(movie.runtime / 60).toFixed(2)} h &bull; {genres} &bull; 13+
              &bull; {movie.release_date}
            </h4>
          </div>

          <div className="flex items-center gap-2 md:w-screen px-3 lg:w-full">
            <button
              className="bg-red-600 w-full py-2 text-white font-semibold rounded-lg"
              onClick={rentMovies}
            >
              Rent ₹149
            </button>
            <button
              className="bg-red-600 w-full py-2 text-white font-semibold rounded-lg"
              onClick={buyMovies}
            >
              Buy ₹749
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
