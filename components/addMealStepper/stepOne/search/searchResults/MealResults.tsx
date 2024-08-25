import { MEALSINTERFACE } from "@/utils/interfaces/mealsAndFoodsInterfaces/interfaces";
import React from "react";
interface PROPSINTERFACE {
  meal: MEALSINTERFACE;
}
export default function MealResults(props: PROPSINTERFACE) {
  const {
    meal: { name },
  } = props;
  return <li>{name}</li>;
}
