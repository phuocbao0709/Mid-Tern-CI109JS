import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import React from "react";
import "./App.css";
import Header from "./components/Header";
import "./index.css";
import spy_carousel from "./assets/imgs/spy_carousel.png";
import NewRelease from "./components/test";
import Explore from "./components/Explore";
import Onepiece from "./assets/imgs/Onepiece.png";
import spy_card1 from "./assets/imgs/spy_card1.png";
import boruto from "./assets/imgs/boruto.png";
import aoashi from "./assets/imgs/aoashi.png";
import attackontitan1 from "./assets/imgs/attackontitan1.png";
import captsu from "./assets/imgs/captsu.png";
import { movie_DATA } from "./components/data/data";

const App = () => {
  const [test, setTest] = useState(movie_DATA);

  const [selectedMovie, setSelectedMovie] = useState();

  return (
    <div className="bg-[#10141e] min-h-screen text-white p-8">
      <Header />
      <Explore />
      <h2 className="text-2xl font-bold mb-6">New Release</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {test.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedMovie(item)}
            className="flex flex-col cursor-pointer transition-transform hover:scale-105"
          >
            <NewRelease
              key={item.id}
              image={item.image}
              movieName={item.movieName}
              episode={item.episode}
            />
          </div>
        ))}
      </div>

      {selectedMovie && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMovie(null)}
        >
          <div
            className="bg-[#161d2f] max-w-2xl w-full rounded-lg overflow-hidden flex flex-col md:flex-row shadow-2xl animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedMovie.image}
              alt={selectedMovie.movieName}
              className="w-full md:w-1/2 object-cover h-[300px] md:h-auto"
            />
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {selectedMovie.movieName}
                </h3>
                <p className="text-blue-400 font-semibold mb-4">
                  {selectedMovie.episode}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed overflow-y-auto max-h-[200px] pr-2">
                  {selectedMovie.description}
                </p>
              </div>

              <button
                onClick={() => setSelectedMovie(null)}
                className="mt-6 bg-black hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-2xl transition-colors duration-300"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
