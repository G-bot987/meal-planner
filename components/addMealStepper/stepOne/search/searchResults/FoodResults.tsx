import { FOODINTERFACE } from "@/utils/interfaces/mealsAndFoodsInterfaces/interfaces";
import { createNewStore } from "@/zustland/store/store";
import React, { useEffect } from "react";

interface PROPSINTERFACE {
  food: FOODINTERFACE;
}
export default function FoodResults(props: PROPSINTERFACE) {
  const { food } = props;
  const { name } = food;
  const { add, changeStep, setStoredOnDB } = createNewStore();
  return (
    <li>
      {name}
      <button
        onClick={() => {
          changeStep(2);
          add(food);
          setStoredOnDB(true);
        }}
      >
        select food
      </button>
    </li>
  );
}
