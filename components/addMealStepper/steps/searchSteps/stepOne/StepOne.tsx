import React, { useState } from "react";
import styles from "./stepOne.module.scss";
import Search from "./search/Search";
import CreateNew from "../../createSteps/create/CreateNew";
import { createNewStore, searchStore } from "@/zustland/store/store";

export default function StepOne() {
  // const searchFor = ["foods", "meals"];
  const [searchMeals, setSearchMeals] = useState(false);
  const [searchFoods, setSearchFoods] = useState(false);
  // const [searchType, setSearchType] = useState<string | boolean>(false);
  const [createNew, setCreateNew] = useState(false);
  const { changeStep, setCompletedStep } = createNewStore();
  const { setSearchType, setParam } = searchStore();
  const { searchType } = searchStore((state) => state);

  return (
    <article className={styles.step__one__wrapper}>
      {searchType && (
        <h3 className={styles.step__one__wrapper__header}>
          performing {searchType} search
        </h3>
      )}
      {!searchType && !createNew && (
        <section className={styles.step__one__wrapper__search__btn__wrapper}>
          {" "}
          <button
            className={styles.step__one__wrapper__search__btn__wrapper__btn}
            onClick={() => {
              setSearchType("personal");
            }}
          >
            search your meals and foods
          </button>
          <button
            className={styles.step__one__wrapper__search__btn__wrapper__btn}
            onClick={() => {
              setSearchType("global");
            }}
          >
            search all meals and foods
          </button>
          <button
            className={styles.step__one__wrapper__search__btn__wrapper__btn}
            onClick={() => {
              changeStep(2);
              setCompletedStep(0);
            }}
          >
            create New Food or Meal
          </button>
        </section>
      )}
      {searchType && (
        <article className={styles.search__wrapper}>
          <button
            className={styles.search__wrapper__btn}
            onClick={() => {
              setSearchType(null);
            }}
          >
            back to type of search
          </button>
          <section className={styles.search__wrapper__button__wrapper}>
            <button
              onClick={() => {
                setParam("meals");
                changeStep(1);
              }}
            >
              Search Meals
            </button>
            <button
              onClick={() => {
                setParam("foods");
                changeStep(1);
              }}
            >
              Search Foods
            </button>
          </section>
        </article>
      )}
    </article>
  );
}
