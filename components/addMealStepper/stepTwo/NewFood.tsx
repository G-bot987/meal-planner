import React, { useEffect, useState } from "react";
import styles from "./newFood.module.scss";
import { createNewStore } from "@/zustland/store/store";

export default function NewFood() {
  const [searchValue, setSearchValue] = useState("");
  const [submit, setSubmit] = useState(false);
  const { add, changeStep, clearEntry, setStoredOnDB } = createNewStore();

  const handleSearch = (searchQuery: string) => {
    setStoredOnDB(false);
    clearEntry();
    add({ name: `${searchQuery}` });
    add({ type: `food` });
    add({ creator: true });
    console.log("quack");
    changeStep(2);
    console.log("post step change");
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
      <section className={styles.form}>
        <label className={styles.form__label} htmlFor="foodName">
          give your food a name
        </label>
        <input
          type="text"
          className={styles.form__input}
          value={searchValue}
          placeholder={`food name`}
          onChange={handleInput}
        />
        <button
          className={styles.form__btn}
          onClick={() => {
            setSubmit(!submit);
          }}
        >
          next
        </button>
        {submit}
      </section>
    </section>
  );
}