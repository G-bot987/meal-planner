"use client";

import {
  getCurrentDay,
  getTYesterdayDay,
  getTomorrowDay,
} from "@/utils/getDay";

import styles from "./diary.module.scss";

import { useEffect, useState } from "react";
import Row from "./Row";

export default function MobileDiary() {
  const currentDay = getCurrentDay();
  const [day, setDay] = useState(currentDay);
  const [getAnotherDay, setGetAnotherDay] = useState(0);
  const meals = ["morning", "lunch", "evening", "post work out", "snacks"];
  useEffect(() => {
    if (getAnotherDay > 0) {
      setDay(getTomorrowDay(getAnotherDay));
    }

    if (getAnotherDay < 0) {
      setDay(getTYesterdayDay(getAnotherDay));
    }
  }, [getAnotherDay]);
  return (
    <section className={styles.mobile__wrapper}>
      <button
        onClick={() => {
          setGetAnotherDay(getAnotherDay - 1);
        }}
      >
        get yesterday
      </button>
      <table className={styles.table__wrapper__table}>
        <tbody>
          <tr className={styles.table__wrapper__table__top__row}>
            <th
              className={styles.table__wrapper__table__top__row__meal__collumn}
            >
              Meal
            </th>
            <th
              className={styles.table__wrapper__table__top__row__day__collumn}
            >
              {day.date}
              {day.day}
            </th>
          </tr>
          {meals.map((meal: string, index: number) => {
            return <Row {...{ meal }} key={index} />;
          })}
        </tbody>
      </table>

      <button
        onClick={() => {
          setGetAnotherDay(getAnotherDay + 1);
        }}
      >
        get tomorrow
      </button>
    </section>
  );
}
