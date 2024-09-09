import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "./newFoodNutrition.module.scss";
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

export default function NewFoodNutrition() {
  const [formData, setFormData] = useState<FORMDATA>({
    calories: "",
    carbohydrates: "",
    fat: "",
    fibre: "",
    protein: "",
    sugar: "",
    weight: "",
  });

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
    console.log("Form submitted:", formData);
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
            onChange={handleChange}
            placeholder={`calories`}
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
            className={styles.wrapper__form__field__wrapper__input}
            value={formData.carbohydrates}
            onChange={handleChange}
            placeholder={`carbohydrates`}
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
            className={styles.wrapper__form__field__wrapper__input}
            value={formData.fat}
            onChange={handleChange}
            placeholder={`fat`}
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
            className={styles.wrapper__form__field__wrapper__input}
            value={formData.fibre}
            onChange={handleChange}
            placeholder={`fibre`}
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
            value={formData.protein}
            onChange={handleChange}
            placeholder={`protein`}
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
            className={styles.wrapper__form__field__wrapper__input}
            value={formData.sugar}
            onChange={handleChange}
            placeholder={`sugar`}
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
            className={styles.wrapper__form__field__wrapper__input}
            value={formData.weight}
            onChange={handleChange}
            placeholder={`weight`}
          />
        </section>
        <button className={styles.wrapper__form__btn} type="submit">
          Submit
        </button>
      </form>
    </article>
  );
}
