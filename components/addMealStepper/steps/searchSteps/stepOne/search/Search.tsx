import React, { useEffect, useState } from "react";
import styles from "../stepOne.module.scss";
import FoodResults from "./searchResults/FoodResults";
import MealResults from "./searchResults/MealResults";
import {
  FOODINTERFACE,
  MEALSINTERFACE,
} from "@/utils/interfaces/mealsAndFoodsInterfaces/interfaces";
import { createNewStore, searchStore } from "@/zustland/store/store";

export default function Search(props: {
  // param: string;
  // searchType: string | boolean;
}) {
  const { searchType, param } = searchStore((state) => state);

  const { changeStep } = createNewStore();

  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [searchResults, setSearchResults] = useState<FOODINTERFACE[] | null>(
    null
  );
  const [mealSearchResults, setMealSearchResults] = useState<
    MEALSINTERFACE[] | null
  >(null);

  const handleSearch = async (searchQuery: string) => {
    if (searchQuery.length < 4) {
      setSearchResults(null);
      return;
    }
    try {
      const search = await fetch(`/api/${param}/${searchQuery}/${searchType}`, {
        method: "GET",
      });

      const result = await search.json();
      if (param === "foods") {
        setSearchResults(result);
      }
      if (param === "meals") {
        setMealSearchResults(result);
      }
    } catch (error) {}
  };

  useEffect(() => {
    handleSearch(searchValue);
  }, [searchValue]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    setSearchValue(userInput);
  };

  return (
    <section className={styles.form}>
      <button
        onClick={() => {
          changeStep(0);
        }}
      >
        back to Meal or Food search
      </button>

      <label htmlFor="search">
        {searchType} Search {param}
      </label>
      <input
        type="text"
        value={searchValue}
        onChange={handleInput}
        placeholder={`search ${param}`}
      />
      <button className={styles.form__submit}> search </button>
      {Array.isArray(searchResults) && param === "foods" && (
        <ul className={styles.form__results}>
          {searchResults.map((food: FOODINTERFACE) => (
            <FoodResults key={food.id} food={food} />
          ))}
        </ul>
      )}
      {Array.isArray(mealSearchResults) && param === "meals" && (
        <ul className={styles.form__results}>
          {mealSearchResults.map((meal: MEALSINTERFACE) => (
            <MealResults key={meal.id} meal={meal} />
          ))}
        </ul>
      )}
    </section>
  );
}
