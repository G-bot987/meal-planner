"use client";

import {
  getCurrentDay,
  getTYesterdayDay,
  getTomorrowDay,
} from "@/utils/getDay";

import styles from "./diary.module.scss";

import { useEffect, useState } from "react";

export default function MobileDiary() {
  const currentDay = getCurrentDay();
  const [day, setDay] = useState(currentDay);
  const [getAnotherDay, setGetAnotherDay] = useState(0);
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
          <tr>
            <td>Breakfast</td>
          </tr>
          <tr>
            <td>Lunch</td>
          </tr>
          <tr>
            <td>Post workout</td>
          </tr>
          <tr>
            <td>Dinner</td>
          </tr>
          <tr>
            <td>snacks</td>
          </tr>
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
