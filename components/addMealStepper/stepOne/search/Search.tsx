import React, { useState } from "react";
import styles from "../stepOne.module.scss";

export default function Search(props: { param: string }) {
  const { param } = props;
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const handleSearch = async (searchQuery: any) => {
    console.log("search", searchQuery, param);
    try {
      // const search = await fetch()
    } catch (error) {}
  };

  const handleInput = (e: any) => {
    const userInput = e.target.value;

    setSearchValue(userInput);
    if (userInput.length > 4) {
      handleSearch(userInput);
    }
  };

  return (
    <section className={styles.form}>
      <label htmlFor="search">Search {param}</label>
      <input
        type="text"
        value={searchValue}
        onChange={handleInput}
        placeholder={`search ${param}`}
      />

      <button className={styles.form__submit}> search </button>
    </section>
  );
}