import { FOODINTERFACE } from "@/utils/interfaces/mealsAndFoodsInterfaces/interfaces";
import { mealStepperStore } from "@/zustland/store/store";
import React from "react";

interface PROPSINTERFACE {
  food: FOODINTERFACE;
}
export default function FoodResults(props: PROPSINTERFACE) {
  const { food } = props;
  const { name } = food;
  const { setStep } = mealStepperStore();

  return (
    <li>
      {name}
      <button
        onClick={() => {
          setStep(1);
        }}
      >
        select food
      </button>
    </li>
  );
}
