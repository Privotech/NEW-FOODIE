import React from "react";
import FoodCard from "./FoodCard";
import { useCart } from "../context/CartContext";

const FoodList = () => {
  const { filteredFoods } = useCart();

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center my-8">Explore our delicious meals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredFoods.map((food) => (
          <FoodCard
            key={food.id}
            food={food}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodList;
