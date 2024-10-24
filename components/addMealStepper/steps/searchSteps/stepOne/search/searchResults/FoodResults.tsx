import { FOODINTERFACE } from "@/utils/interfaces/mealsAndFoodsInterfaces/interfaces";
import { backUpNutritionalStore, createNewStore } from "@/zustland/store/store";
import React, { useEffect } from "react";

interface PROPSINTERFACE {
  food: FOODINTERFACE;
}
export default function FoodResults(props: PROPSINTERFACE) {
  const { food } = props;
  const { name } = food;
  const { add, changeStep, setStoredOnDB } = createNewStore();
  const { addToBackUp } = backUpNutritionalStore();

  return (
    <li>
      {name}
      <button
        onClick={() => {
          changeStep(5);
          add(food);
          setStoredOnDB(true);
          addToBackUp(food);
        }}
      >
        select food
      </button>
    </li>
  );
}
