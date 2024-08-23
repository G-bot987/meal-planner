import { MEALSINTERFACE } from "@/utils/interfaces/mealsAndFoodsInterfaces/interfaces";
import React from "react";
interface PROPSINTERFACE {
  meal: MEALSINTERFACE;
}
export default function MealResults(props: PROPSINTERFACE) {
  const { meal } = props;
  const { name } = meal;
  return <li>{name}</li>;
}
