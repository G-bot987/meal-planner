import React, { useState } from "react";
import styles from "./stepOne.module.scss";
import Search from "./search/Search";
import CreateNew from "./create/CreateNew";

export default function StepOne() {
  // const searchFor = ["foods", "meals"];
  const [searchMeals, setSearchMeals] = useState(false);
  const [searchFoods, setSearchFoods] = useState(false);
  const [searchType, setSearchType] = useState<string | boolean>(false);
  const [createNew, setCreateNew] = useState(false);

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
              setCreateNew(!createNew);
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

      {typeof searchType === "string" && (
        <section>
          {searchMeals && <Search param="meals" searchType={searchType} />}
          {searchFoods && <Search param="foods" searchType={searchType} />}
        </section>
      )}

      {createNew && (
        <article className={styles.step__one__wrapper__add__new__wrapper}>
          <button
            className={styles.step__one__wrapper__add__new__wrapper__btn}
            onClick={() => {
              setCreateNew(!createNew);
            }}
          >
            back to search or create menu
          </button>

          <CreateNew />
        </article>
      )}
    </article>
  );
}
