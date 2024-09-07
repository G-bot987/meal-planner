import React, { useState } from "react";
import styles from "./create.module.scss";
import New from "./new/New";

export default function CreateNew() {
  const [versionUpdate, setVersionUpdate] = useState<string | null>(null);
  return (
    <section className={styles.create__wrapper}>
      {!versionUpdate && (
        <article className={styles.create__wrapper__question__wrapper}>
          <h1 className={styles.create__wrapper__question__wrapper__header}>
            are you updating a version of a meal or food{" "}
          </h1>

          <section
            className={styles.create__wrapper__question__wrapper__btn__wrapper}
          >
            <button
              className={
                styles.create__wrapper__question__wrapper__btn__wrapper__btn
              }
              onClick={() => {
                setVersionUpdate("version");
              }}
            >
              yes
            </button>
            <button
              className={
                styles.create__wrapper__question__wrapper__btn__wrapper__btn
              }
              onClick={() => {
                setVersionUpdate("new");
              }}
            >
              no
            </button>
          </section>
        </article>
      )}
      {versionUpdate === "new" && <New />}
    </section>
  );
}
