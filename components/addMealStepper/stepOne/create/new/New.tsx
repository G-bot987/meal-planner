import React, { useState } from "react";
import styles from "./new.module.scss";
import NewFood from "./food/NewFood";
export default function New() {
  const [creatingNew, setCreatingNew] = useState<string | null>(null);

  return (
    <article className={styles.create__wrapper}>
      {!creatingNew && (
        <article className={styles.create__wrapper__question__wrapper}>
          <h1 className={styles.create__wrapper__question__wrapper__header}>
            new food or meal
          </h1>
          <section
            className={
              styles.create__wrapper__question__wrapper__new__btn__wrapper
            }
          >
            <button
              className={
                styles.create__wrapper__question__wrapper__new__btn__wrapper__btn
              }
              onClick={() => {
                setCreatingNew("meal");
              }}
            >
              meal
            </button>
            <button
              className={
                styles.create__wrapper__question__wrapper__new__btn__wrapper__btn
              }
              onClick={() => {
                setCreatingNew("food");
              }}
            >
              food
            </button>
          </section>
        </article>
      )}
      {creatingNew === "food" && <NewFood />}
    </article>
  );
}
