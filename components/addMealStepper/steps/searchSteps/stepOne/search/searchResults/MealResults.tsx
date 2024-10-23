import { MEALSINTERFACE } from "@/utils/interfaces/mealsAndFoodsInterfaces/interfaces";
import { createNewStore } from "@/zustland/store/store";
import React from "react";
import ArchivedMeals from "./archivedMeals/ArchivedMeals";
interface PROPSINTERFACE {
  meal: MEALSINTERFACE;
}
export default function MealResults(props: PROPSINTERFACE) {
  const {
    meal: { name, archived_meals },
  } = props;
  const { changeStep } = createNewStore();

  return (
    <li>
      {name}

      <button
        onClick={() => {
          changeStep(1);
        }}
      >
        select meal
      </button>
      {archived_meals && archived_meals.length > 0 && (
        <ul>
          {archived_meals.map((oldMeal: any) => (
            <ArchivedMeals meal={oldMeal} key={oldMeal.version} />
          ))}
        </ul>
      )}
    </li>
  );
}
