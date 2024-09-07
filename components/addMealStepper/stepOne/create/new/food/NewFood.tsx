import React, { useState } from "react";
import styles from "./newFood.module.scss";

export default function NewFood() {
  const [searchValue, setSearchValue] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    setSearchValue(userInput);
  };
  return (
    <section>
      <h1>give your food a name</h1>

      <section className={styles.form}>
        <label htmlFor="foodName">give your food a name </label>
        <input
          type="text"
          value={searchValue}
          onChange={handleInput}
          placeholder={`food name`}
        />
        <button className={styles.form__submit}> next </button>
      </section>
    </section>
  );
}
