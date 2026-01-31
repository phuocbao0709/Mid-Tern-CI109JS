import React from "react";
import spy_carousel from "../../assets/imgs/spy_carousel.png";

const Explore = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-2">Explore</h2>
      <p className="text-gray-400 mb-6">What are you gonna watch today?</p>

      <div className="relative h-[400px] w-full rounded-3xl overflow-hidden group">
        <img src={spy_carousel} className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex flex-col justify-end p-10">
          <h3 className="text-4xl font-bold mb-4">Weather With You</h3>
          <p className="max-w-xl text-gray-200 leading-relaxed">
            Corrupt politicians, frenzied nationalists, and other warmongering
            forces constantly jeopardize the thin veneer of peace between
            neighboring countries Ostania and Westalis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Explore;
