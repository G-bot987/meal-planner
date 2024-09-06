"use client";

import {
  getCurrentDay,
  getTYesterdayDay,
  getTomorrowDay,
} from "@/utils/getDay";
import Row from "./Row";
import AddMealStepper from "../addMealStepper/AddMealStepper";

import styles from "./diary.module.scss";

import { useCallback, useEffect, useState } from "react";
import { useStore } from "@/zustland/store/store";

export default function MobileDiary() {
  const currentDay = getCurrentDay();
  const [day, setDay] = useState(currentDay);
  const [getAnotherDay, setGetAnotherDay] = useState(0);
  const meals = ["morning", "lunch", "evening", "post work out", "snacks"];
  const [showAddMenu, setShowAddmenu] = useState(false);

  const choosenIndex = useStore((state) => state.mealIndex);
  const choosenMeal = meals[choosenIndex];

  useEffect(() => {
    if (getAnotherDay > 0) {
      setDay(getTomorrowDay(getAnotherDay));
    }
    if (getAnotherDay === 0) {
      setDay(getCurrentDay());
    }

    if (getAnotherDay < 0) {
      setDay(getTYesterdayDay(getAnotherDay));
    }
  }, [getAnotherDay]);

  const toggleMealStepper = useCallback(() => {
    setShowAddmenu((prevState: boolean) => !prevState);
  }, []);

  return (
    <section className={styles.mobile__wrapper}>
      {!showAddMenu ? (
        <>
          <h1 className={styles.mobile__wrapper__header}>Diary </h1>
          <button
            onClick={() => {
              setGetAnotherDay(getAnotherDay - 1);
            }}
            className={styles.button}
          >
            <div
              className={`${styles.button__chevron} ${styles["button__chevron--left"]} ${styles["button__chevron--large--left"]}`}
            ></div>
            <div
              className={
                styles.button__chevron + " " + styles["button__chevron--left"]
              }
            ></div>
          </button>
          <table className={styles.table__wrapper__table}>
            <tbody>
              <tr className={styles.table__wrapper__table__top__row}>
                <th
                  className={
                    styles.table__wrapper__table__top__row__meal__collumn
                  }
                >
                  Meal
                </th>
                <th
                  className={
                    styles.table__wrapper__table__top__row__day__collumn
                  }
                >
                  {day.date}
                  {day.day}
                </th>
              </tr>
              {meals.map((meal: string, index: number) => {
                return (
                  <Row
                    {...{
                      meal,
                      index,
                      toggleMealStepper,
                    }}
                    key={index}
                  />
                );
              })}
            </tbody>
          </table>

          <button
            onClick={() => {
              setGetAnotherDay(getAnotherDay + 1);
            }}
            className={styles.button}
          >
            <div
              className={
                styles.button__chevron + " " + styles["button__chevron--right"]
              }
            ></div>
            <div
              className={`${styles.button__chevron} ${styles["button__chevron--right"]} ${styles["button__chevron--large"]}`}
            ></div>
          </button>
        </>
      ) : (
        <AddMealStepper
          toggleMealStepper={toggleMealStepper}
          day={day}
          meal={choosenMeal}
        />
      )}
    </section>
  );
}
