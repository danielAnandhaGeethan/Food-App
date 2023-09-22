import React, { useEffect } from "react";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Featured = () => {
  const sliders = [
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    console.log(currentIndex);
  }, [currentIndex]);

  return (
    <div className="max-w-[1520px] h-[500px] w-full py-4 px-4 relative group">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
      ></div>
      <div
        onClick={() =>
          setCurrentIndex((prev) => (prev > 0 ? prev - 1 : sliders.length - 1))
        }
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer"
      >
        <BsChevronCompactLeft />
      </div>
      <div
        onClick={() =>
          setCurrentIndex((prev) => (prev < sliders.length - 1 ? prev + 1 : 0))
        }
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer"
      >
        <BsChevronCompactRight />
      </div>
      <div className="flex justify-center top-4 py-2">
        {sliders.map((item, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled size={25} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
