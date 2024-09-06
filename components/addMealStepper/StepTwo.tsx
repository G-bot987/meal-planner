import React from "react";
import styles from "./addMealStepper.module.scss";
import { choosenFoodOrMeal } from "@/zustland/store/store";

export default function StepTwo() {
  const food = choosenFoodOrMeal((state) => state.food);
  const { name } = food;
  return (
    <section className={styles.step__two}>
      StepTwo
      <h3>you have selected {name}</h3>
    </section>
  );
}
