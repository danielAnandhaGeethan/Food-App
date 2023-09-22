import React, { useState } from "react";
import { ArrowSmRightIcon } from "@heroicons/react/outline";
import { mealData } from "../data/data";

const Meal = () => {
  const [foods, setFoods] = useState(mealData);

  const filterCat = (category) => {
    setFoods(
      mealData.filter((item) => {
        return item.category === category;
      })
    );
  };

  return (
    <div className="max-w-[1520px] m-auto px-4 py-12">
      <h1 className="text-orange-500 font-bold text-2xl text-center py-2">
        Our Meal
      </h1>
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="flex justify-center md:justify-center">
          <button
            onClick={() => setFoods(mealData)}
            className="m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700"
          >
            All
          </button>
          <button
            onClick={() => filterCat("pizza")}
            className="m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700"
          >
            Pizza
          </button>
          <button
            onClick={() => filterCat("chicken")}
            className="m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700"
          >
            Chicken
          </button>
          <button
            onClick={() => filterCat("salad")}
            className="m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700"
          >
            Salad
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4">
        {foods.map((meal) => (
          <div
            key={meal.id}
            className="border-none hover:scale-105 duration-300"
          >
            <img
              src={meal.image}
              alt={meal.name}
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <div className="flex justify-between py-2 px-4">
              <p className="font-bold">{meal.name}</p>
              <p className="bg-orange-700 h-18 w-18 rounded-full px-2 py-3 -mt-10 text-white border-8">
                {meal.price}
              </p>
            </div>
            <div className="pl-4 py-4 -mt-6">
              <p className="flex item-center text-indigo-600">
                View More
                <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meal;
