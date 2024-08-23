import React from "react";

export interface FOODINTERFACE {
  id: number;
  name: string;
  calories: number;
  carbohydrates: number;
  fat: number;
  fibre: number;
  protein: number;
  sugar: number;
  weight: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  user_id: number | null;
}
interface PROPSINTERFACE {
  food: FOODINTERFACE;
}

export default function FoodResults(props: PROPSINTERFACE) {
  const { food } = props;
  const { name } = food;
  return <li>{name}</li>;
}
