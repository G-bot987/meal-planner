import { FOODINTERFACE } from "@/utils/interfaces/mealsAndFoodsInterfaces/interfaces";
import React from "react";

interface PROPSINTERFACE {
  food: FOODINTERFACE;
}
export default function FoodResults(props: PROPSINTERFACE) {
  const { food } = props;
  const { name } = food;
  return <li>{name}</li>;
}
