import React, { useEffect, useState } from "react";
import styles from "./new.module.scss";
import { createNewStore } from "@/zustland/store/store";
export default function New() {
  const [creatingNew, setCreatingNew] = useState<string | null>(null);

  //tried to understand why this is here commented out, i was setting stepper state on load to initially fix bugs but removing enables the loading of this comp from the nutritional screen, when the user isn't the food creator. tried to replicate reason for this and look for bugs when removed couldn't find any so commenting for now

  // const { changeStep } = createNewStore();
  // useEffect(() => {
  //   changeStep(0);
  // }, []);
  const { changeStep } = createNewStore();

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
              onClick={() => {}}
            >
              meal
            </button>
            <button
              className={
                styles.create__wrapper__question__wrapper__new__btn__wrapper__btn
              }
              onClick={() => {
                changeStep(3);
              }}
            >
              food
            </button>
          </section>
        </article>
      )}
    </article>
  );
}
