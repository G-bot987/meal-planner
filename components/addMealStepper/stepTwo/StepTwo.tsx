import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "./StepTwo.module.scss";
import { createNewStore } from "@/zustland/store/store";
interface FORMDATA {
  calories: string;
  carbohydrates: string;
  fat: string;
  fibre: string;
  protein: string;
  sugar: string;
  weight: string;
}

export default function StepTwo() {
  const [formData, setFormData] = useState<FORMDATA>({
    calories: "",
    carbohydrates: "",
    fat: "",
    fibre: "",
    protein: "",
    sugar: "",
    weight: "",
  });
  // this was envoked as null but caused a typing error as when a initial error msg is sent in the previous state is not iteratable if it is null error was: Type 'string[] | null' must have a '[Symbol.iterator]()' method that returns an iterator.ts(2488)
  const [error, setError] = useState<string[]>([]);
  const { name, calories, carbohydrates, fat, fibre, protein, sugar, weight } =
    createNewStore((state) => state.entry);
  const { storedOnDB } = createNewStore((state) => state);

  const { add, changeStep } = createNewStore();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const regex = /^\d+(\.\d+)?$/;
    for (const [key, value] of Object.entries(formData)) {
      console.log(`${key}: ${value}`);
      const test = regex.test(value);
      if (storedOnDB) {
        changeStep(2);
      }
      if (!test) {
        // passing in previous state and spreading otherwise previous error msgs are removed on update
        setError((prevItems) => [
          ...prevItems,
          `${key} is not a positive number you can only use numbers like 1,4,5 or 0.35 do not include measurement units in your food nutrition all measurements should be in grams`,
        ]);
      } else {
        setError([]);
        const number = parseFloat(value);
        add({ [key]: number });
        changeStep(2);
      }
    }
  };

  return (
    <article className={styles.wrapper}>
      <button
        className={styles.wrapper__btn}
        onClick={() => {
          changeStep(0);
        }}
      >
        back to previous step
      </button>
      <h1 className={styles.wrapper__header}>nutrition</h1>
      <h2>for {name}</h2>
      <p className={styles.wrapper__prompt}>
        only add values for nutrition content you want to add
      </p>
      <form className={styles.wrapper__form} onSubmit={handleSubmit}>
        <section className={styles.wrapper__form__field__wrapper}>
          <label
            className={styles.wrapper__form__field__wrapper__label}
            htmlFor="calories"
          >
            calories
          </label>
          <input
            type="text"
            className={styles.wrapper__form__field__wrapper__input}
            value={formData.calories}
            name="calories"
            onChange={handleChange}
            placeholder={`${calories}`}
          />
        </section>
        <section className={styles.wrapper__form__field__wrapper}>
          <label
            className={styles.wrapper__form__field__wrapper__label}
            htmlFor="carbohydrates"
          >
            carbohydrates
          </label>
          <input
            type="text"
            name="carbohydrates"
            className={styles.wrapper__form__field__wrapper__input}
            value={formData.carbohydrates}
            onChange={handleChange}
            placeholder={`${carbohydrates}`}
          />
        </section>
        <section className={styles.wrapper__form__field__wrapper}>
          <label
            className={styles.wrapper__form__field__wrapper__label}
            htmlFor="fat"
          >
            fat
          </label>
          <input
            type="text"
            name="fat"
            className={styles.wrapper__form__field__wrapper__input}
            value={formData.fat}
            onChange={handleChange}
            placeholder={`${fat}`}
          />
        </section>
        <section className={styles.wrapper__form__field__wrapper}>
          <label
            className={styles.wrapper__form__field__wrapper__label}
            htmlFor="fibre"
          >
            fibre
          </label>
          <input
            type="text"
            name="fibre"
            className={styles.wrapper__form__field__wrapper__input}
            value={formData.fibre}
            onChange={handleChange}
            placeholder={`${fibre}`}
          />
        </section>
        <section className={styles.wrapper__form__field__wrapper}>
          <label
            className={styles.wrapper__form__field__wrapper__label}
            htmlFor="protein"
          >
            protein
          </label>
          <input
            type="text"
            className={styles.wrapper__form__field__wrapper__input}
            name="protein"
            value={formData.protein}
            onChange={handleChange}
            placeholder={`${protein}`}
          />
        </section>
        <section className={styles.wrapper__form__field__wrapper}>
          <label
            className={styles.wrapper__form__field__wrapper__label}
            htmlFor="sugar"
          >
            sugar
          </label>
          <input
            type="text"
            name="sugar"
            className={styles.wrapper__form__field__wrapper__input}
            value={formData.sugar}
            onChange={handleChange}
            placeholder={`${sugar}`}
          />
        </section>
        <section className={styles.wrapper__form__field__wrapper}>
          <label
            className={styles.wrapper__form__field__wrapper__label}
            htmlFor="weight"
          >
            weight in grams
          </label>
          <input
            type="text"
            name="weight"
            className={styles.wrapper__form__field__wrapper__input}
            value={formData.weight}
            onChange={handleChange}
            placeholder={`${weight}`}
          />
        </section>
        <button className={styles.wrapper__form__btn} type="submit">
          Submit
        </button>
      </form>
      {error.length > 0 && (
        <ul>
          {error.map((e: string, i: number) => (
            <li key={i}>{e}</li>
          ))}
        </ul>
      )}
    </article>
  );
}
