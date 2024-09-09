import React, { useEffect, useState } from "react";
import styles from "./new.module.scss";
import NewFood from "./food/NewFood";
import NewFoodNutrition from "./food/nutrition/NewFoodNutrition";
import SubmissionScreen from "./submission/SubmissionScreen";
import { createNewStore } from "@/zustland/store/store";
export default function New() {
  const [creatingNew, setCreatingNew] = useState<string | null>(null);
  const step = createNewStore((state) => state.step);
  const { changeStep } = createNewStore();
  useEffect(() => {
    changeStep(0);
  }, []);

  const steps = [
    <NewFood key={1} />,
    <NewFoodNutrition key={2} />,
    <SubmissionScreen key={3} />,
  ];

  return (
    <article className={styles.create__wrapper}>
      {!creatingNew && (
        <article className={styles.create__wrapper__question__wrapper}>
          <h1 className={styles.create__wrapper__question__wrapper__header}>
            new food or meal
          </h1>
          <section
            className={
              styles.create__wrapper__question__wrapper__new__btn__wrapper
            }
          >
            <button
              className={
                styles.create__wrapper__question__wrapper__new__btn__wrapper__btn
              }
              onClick={() => {
                setCreatingNew("meal");
              }}
            >
              meal
            </button>
            <button
              className={
                styles.create__wrapper__question__wrapper__new__btn__wrapper__btn
              }
              onClick={() => {
                setCreatingNew("food");
              }}
            >
              food
            </button>
          </section>
        </article>
      )}
      {creatingNew === "food" && steps[step]}
    </article>
  );
}
