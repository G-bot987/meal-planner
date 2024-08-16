"use client";
import {
  getCurrentDay,
  getTYesterdayDay,
  getTomorrowDay,
} from "@/utils/getDay";
import { useEffect, useState } from "react";

export default function MobileDiary() {
  const currentDay = getCurrentDay();
  const [day, setDay] = useState(currentDay);
  const [getAnotherDay, setGetAnotherDay] = useState(null || String);
  useEffect(() => {
    if (getAnotherDay === "tomorrow") {
      setDay(getTomorrowDay());
    }

    if (getAnotherDay === "yesterday") {
      setDay(getTYesterdayDay());
    }
  }, [getAnotherDay]);
  return (
    <div>
      MobileDiary
      {day.date}
      {day.day}
      <button
        onClick={() => {
          setGetAnotherDay("tomorrow");
        }}
      >
        get tomorrow
      </button>
      <button
        onClick={() => {
          setGetAnotherDay("yesterday");
        }}
      >
        get yesterday
      </button>
    </div>
  );
}
