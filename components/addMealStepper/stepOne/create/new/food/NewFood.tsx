import React, { useEffect, useState } from "react";
import styles from "./newFood.module.scss";
import { createNewStore } from "@/zustland/store/store";

export default function NewFood() {
  const [searchValue, setSearchValue] = useState("");
  const [submit, setSubmit] = useState(false);
  const { add } = createNewStore();

  const handleSearch = (searchQuery: string) => {
    add({ name: `${searchQuery}` });
  };

  useEffect(() => {
    if (submit) {
      handleSearch(searchValue);
    }
  }, [submit]);

  const handleInput = (e: any) => {
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
          placeholder={`food name`}
          onChange={handleInput}
        />
        <button
          className={styles.form__submit}
          onClick={() => {
            setSubmit(!submit);
          }}
        >
          next
        </button>
      </section>
    </section>
  );
}
