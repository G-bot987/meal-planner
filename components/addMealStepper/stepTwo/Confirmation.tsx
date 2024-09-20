import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { FORMDATA } from "./StepTwo";
import styles from "./StepTwo.module.scss";

export default function Confirmation(props: Partial<FORMDATA>) {
  console.log(Object.entries(props));

  const [formData, setFormData] = useState<Partial<FORMDATA>>({});
  const arrayOfChangedNutrition = Object.entries(props);

  useEffect(() => {
    arrayOfChangedNutrition.forEach((changedValue) =>
      setFormData((prevData) => ({
        ...prevData,
        [changedValue[0]]: changedValue[1],
      }))
    );
  }, [props]);

  useEffect(() => {}, [formData]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // const { name, value } = e.target;
    // setStoredOnDB(false);
    // setFormData((prevData) => ({
    //   ...prevData,
    //   [name]: value,
    // }));
  };

  const checkIfUserHasChangedValue = (property: string, value: number) => {
    // const currentValues = {
    //   calories,
    //   carbohydrates,
    //   fat,
    //   fibre,
    //   protein,
    //   sugar,
    //   weight,
    // };
    // if (value !== currentValues[property as keyof typeof currentValues]) {
    //   add({ [property]: value });
    //   setChangedValues((prev) => ({ ...prev, [property]: value }));
    //   setConfirmationScreen(true);
    //   return;
    // }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const regex = /^\d+(\.\d+)?$/;

    // for (const [key, value] of Object.entries(formData)) {
    //   const test = regex.test(value);
    //   const valueAsInt = parseFloat(value);
    //   if (storedOnDB) {
    //     changeStep(2);
    //   }
    //   if (!test) {
    //     // passing in previous state and spreading otherwise previous error msgs are removed on update
    //     setError((prevItems) => [
    //       ...prevItems,
    //       `${key} is not a positive number you can only use numbers like 1,4,5 or 0.35 do not include measurement units in your food nutrition all measurements should be in grams`,
    //     ]);
    //   } else if (!storedOnDB && creator) {
    //     console.log("this data has been changed and you are the creator");
    //     //abstracted function check that the new value is different from store data, if so then update store
    //     checkIfUserHasChangedValue(key, valueAsInt);
    //   } else if (!creator) {
    //     console.log("you are not the creator ");
    //   } else {
    //     setError([]);
    //     const number = parseFloat(value);
    //     add({ [key]: number });
    //     changeStep(2);
    //   }
    // }
  };
  return (
    <form onSubmit={handleSubmit}>
      You have changed the following values please submit to confirm
      {Array.isArray(arrayOfChangedNutrition) &&
        arrayOfChangedNutrition.length > 0 &&
        arrayOfChangedNutrition.map(([key, value]) => (
          <section key={key}>
            <label
              className={styles.wrapper__form__field__wrapper__label}
              htmlFor="weight"
            >
              {key}
            </label>
            <input
              type="text"
              name="weight"
              className={styles.wrapper__form__field__wrapper__input}
              value={formData[key] ?? ""}
              onChange={handleChange}
              placeholder={`${value}`}
            />
          </section>
        ))}
      <button className={styles.wrapper__form__btn} type="submit">
        Submit
      </button>
    </form>
  );
}
