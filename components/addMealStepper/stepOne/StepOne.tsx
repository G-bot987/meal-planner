import React, { useState } from "react";
import styles from "./stepOne.module.scss";
import Search from "./search/Search";

export default function StepOne() {
  // const searchFor = ["foods", "meals"];
  const [searchMeals, setSearchMeals] = useState(false);
  const [searchFoods, setSearchFoods] = useState(false);

  return (
    <article className={styles.step__one__wrapper}>
      <section className={styles.button__wrapper}>
        <button
          onClick={() => {
            setSearchMeals(!searchMeals), setSearchFoods(false);
          }}
        >
          Search Meals
        </button>
        <button
          onClick={() => {
            setSearchFoods(!searchFoods), setSearchMeals(false);
          }}
        >
          Search Foods
        </button>
      </section>
      {searchMeals && <Search param="meals" />}
      {searchFoods && <Search param="foods" />}
    </article>
  );
}
