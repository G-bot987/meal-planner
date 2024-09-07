import React from "react";
import styles from "./create.module.scss";

export default function CreateNew() {
  return (
    <section className={styles.create__wrapper}>
      <h1 className={styles.create__wrapper__header}>
        are you updating a version of a meal or food{" "}
      </h1>

      <article className={styles.create__wrapper__btn__wrapper}>
        <button className={styles.create__wrapper__btn__wrapper__btn}>
          yes
        </button>
        <button className={styles.create__wrapper__btn__wrapper__btn}>
          no
        </button>
      </article>
    </section>
  );
}
