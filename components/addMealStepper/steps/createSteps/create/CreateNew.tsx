import React, { useEffect, useState } from "react";
import styles from "./create.module.scss";
import New from "./new/New";
import { createNewStore, endPointStore } from "@/zustland/store/store";

export default function CreateNew() {
  const [versionUpdate, setVersionUpdate] = useState<string | null>(null);
  const { setOperation, clearStore } = endPointStore();
  const { changeStep } = createNewStore();

  return (
    <section className={styles.create__wrapper}>
      {!versionUpdate && (
        <article className={styles.create__wrapper__question__wrapper}>
          <h1 className={styles.create__wrapper__question__wrapper__header}>
            are you updating a version of a meal or food
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
                setOperation("version");
              }}
            >
              yes
            </button>
            <button
              className={
                styles.create__wrapper__question__wrapper__btn__wrapper__btn
              }
              onClick={() => {
                changeStep(3);
                setOperation("new");
              }}
            >
              no
            </button>
          </section>
        </article>
      )}
    </section>
  );
}
