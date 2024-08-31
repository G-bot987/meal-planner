import { MEALSINTERFACE } from "@/utils/interfaces/mealsAndFoodsInterfaces/interfaces";
import React from "react";
interface PROPSINTERFACE {
  meal: MEALSINTERFACE;
}
export default function MealResults(props: PROPSINTERFACE) {
  const {
    meal: { name, archived_meals },
  } = props;
  return (
    <li>
      {name}
      {archived_meals && archived_meals.length > 0 && (
        <ul>
          {archived_meals.map((oldMeal: any) => (
            <li key={oldMeal.version}>
             a newer version {oldMeal.version} was found with name {oldMeal.name}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
