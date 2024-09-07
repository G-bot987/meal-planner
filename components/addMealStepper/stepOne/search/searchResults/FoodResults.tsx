import { FOODINTERFACE } from "@/utils/interfaces/mealsAndFoodsInterfaces/interfaces";
import { choosenFoodOrMeal, mealStepperStore } from "@/zustland/store/store";
import React, { useEffect } from "react";

interface PROPSINTERFACE {
  food: FOODINTERFACE;
}
export default function FoodResults(props: PROPSINTERFACE) {
  const { food } = props;
  const { name } = food;
  const { setStepForMealStepper } = mealStepperStore();
  const { setFood } = choosenFoodOrMeal();

  return (
    <li>
      {name}
      <button
        onClick={() => {
          setStepForMealStepper(1);
          setFood(food);
        }}
      >
        select food
      </button>
    </li>
  );
}
