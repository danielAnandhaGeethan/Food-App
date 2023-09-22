import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { topPicks } from "../data/data";
import "@splidejs/react-splide/css";

const TopPicks = () => {
  return (
    <>
      <h1 className="text-orange-500 font-bold text-2xl text-center py-2">
        Top Picks
      </h1>
      <div className="hidden lg:flex max-w[1520px] m-auto p-2">
        <Splide options={{ perPage: 4, gap: "0.5rem", drag: "free" }}>
          {topPicks.map((item) => (
            <SplideSlide key={item.id}>
              <div className="rounded-3xl relative">
                <div className="absolute w-full h-full bg-black/50 rounded-3xl text-white">
                  <p className="px-2 text-2xl pt-4 font-bold">{item.title}</p>
                  <p className="px-2">{item.price}</p>
                  <button className="border-dotted border-white text-white mx-2 absolute bottom-4">
                    Add To Cart
                  </button>
                </div>
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-[200px] w-full object-cover rounded-2xl cursor-pointer hover:scale-105 ease-out duration-300"
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
};

export default TopPicks;
