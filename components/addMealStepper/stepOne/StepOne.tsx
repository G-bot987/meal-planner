import React, { useState } from "react";
import styles from "./stepOne.module.scss";
import Search from "./search/Search";

export default function StepOne() {
  // const searchFor = ["foods", "meals"];
  const [searchMeals, setSearchMeals] = useState(false);
  const [searchFoods, setSearchFoods] = useState(false);
  const [searchType, setSearchType] = useState<string | boolean>(false);

  return (
    <article className={styles.step__one__wrapper}>
      {searchType && (
        <h3 className={styles.step__one__wrapper__header}>
          performing {searchType} search
        </h3>
      )}
      {!searchType && (
        <section className={styles.step__one__wrapper__search__btn__wrapper}>
          {" "}
          <button
            onClick={() => {
              setSearchType("personal");
            }}
          >
            search your meals and foods
          </button>
          <button
            onClick={() => {
              setSearchType("global");
            }}
          >
            search all meals and foods
          </button>
        </section>
      )}
      {searchType && (
        <article className={styles.search__wrapper}>
          <button
            onClick={() => {
              setSearchType(false);
            }}
          >
            back to type of search
          </button>
          <section className={styles.search__wrapper__button__wrapper}>
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
        </article>
      )}

      {searchMeals && <Search param="meals" searchType={searchType} />}
      {searchFoods && <Search param="foods" searchType={searchType} />}
    </article>
  );
}
