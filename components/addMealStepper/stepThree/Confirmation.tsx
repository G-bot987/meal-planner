import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { FORMDATA } from "./StepThree";
import styles from "./StepThree.module.scss";
import { createNewStore } from "@/zustland/store/store";

interface PROPSINTERFACE {
  changedValues: Partial<FORMDATA>;
  confirmationScreen: boolean;
  setConfirmationScreen: Function;
}

export default function Confirmation(props: PROPSINTERFACE) {
  const { changedValues, confirmationScreen, setConfirmationScreen } = props;
  const [formData, setFormData] = useState<Partial<FORMDATA>>({});
  const [errors, setErrors] = useState<string[]>([]);

  const { add, changeStep, setStoredOnDB, setCompletedStep } = createNewStore();

  const arrayOfChangedNutrition = Object.entries(changedValues);

  useEffect(() => {
    arrayOfChangedNutrition.forEach((changedValue) =>
      setFormData((prevData) => ({
        ...prevData,
        [changedValue[0]]: changedValue[1],
      }))
    );
  }, [changedValues]);

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
    const regex = /^0$|^\d+(\.\d+)?$/;
    const newErrors: string[] = [];

    for (const [key, value] of Object.entries(formData)) {
      const valueAsInt = typeof value === "string" ? parseFloat(value) : value;
      const test =
        typeof value === "string" || typeof value === "number"
          ? regex.test(value.toString())
          : value;

      if (!test) {
        newErrors.push(
          `${key} is not a positive number. You can only use numbers like 1, 4, 5, or 0.35. Do not include measurement units in your food nutrition; all measurements should be in grams.`
        );
      } else {
        add({ [key]: value });
      }
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
    } else {
      setErrors([]);
      setCompletedStep(1);
      changeStep(2);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <button
        onClick={() => {
          setConfirmationScreen(!confirmationScreen);
        }}
      >
        back
      </button>
      You have changed the following values please submit to confirm
      {Array.isArray(arrayOfChangedNutrition) &&
        arrayOfChangedNutrition.length > 0 &&
        arrayOfChangedNutrition.map(([key, value]) => (
          <section key={key}>
            <label
              className={styles.wrapper__form__field__wrapper__label}
              htmlFor={`${key}`}
            >
              {key}
            </label>
            <input
              type="text"
              name={`${key}`}
              className={styles.wrapper__form__field__wrapper__input}
              value={formData[key] ?? ""}
              onChange={handleChange}
              placeholder={`${value}`}
            />
          </section>
        ))}
      {errors.length > 0 && (
        <ul>
          {errors.map((e: string, i: number) => (
            <li key={i}>{e}</li>
          ))}
        </ul>
      )}
      <button className={styles.wrapper__form__btn} type="submit">
        Submit
      </button>
    </form>
  );
}
