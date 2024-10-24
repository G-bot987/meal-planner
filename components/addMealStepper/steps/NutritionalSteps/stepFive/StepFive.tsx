import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import styles from "./StepFive.module.scss";
import {
  backUpNutritionalStore,
  createNewStore,
  searchStore,
} from "@/zustland/store/store";
import Confirmation from "./Confirmation";
import {
  FOODINTERFACE,
  MEALSINTERFACE,
} from "@/utils/interfaces/mealsAndFoodsInterfaces/interfaces";
export interface FORMDATA {
  calories: string | number;
  carbohydrates: string | number;
  fat: string | number;
  fibre: string | number;
  protein: string | number;
  sugar: string | number;
  weight: string | number;
  [key: string]: string | number; // Index signature to allow dynamic keys
}

export default function StepFive() {
  const {
    name,
    calories,
    carbohydrates,
    fat,
    fibre,
    protein,
    sugar,
    weight,
    creator,
  } = createNewStore((state) => state.entry);
  const { storedOnDB } = createNewStore((state) => state);
  const { entry } = backUpNutritionalStore((state) => state);

  const { add, changeStep, setStoredOnDB, setCompletedStep } = createNewStore();

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
  const [errors, setErrors] = useState<string[]>([]);
  const [createNewView, setCreateNewView] = useState(false);
  const [confirmationScreen, setConfirmationScreen] = useState(false);
  const [restoreOriginalData, setRestoreOriginalData] = useState(false);

  const [changedValues, setChangedValues] = useState<Partial<FORMDATA>>({});

  const putStoredNutritionalDataInFormState = (
    property: string,
    value: string | number | null
  ) => {
    if (value !== null) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [property]: value,
      }));
    }
  };

  useEffect(() => {
    // must check for null as otherwise typescript error Type 'number | null' is not assignable to type 'string | number'.
    // Type 'null' is not assignable to type 'string | number'.ts(2322)
    //cant check if value just exists as 0 and 0.1 etc will evaluate to falsy, even thought they could be valid submissions
    putStoredNutritionalDataInFormState("calories", calories);
    putStoredNutritionalDataInFormState("carbohydrates", carbohydrates);
    putStoredNutritionalDataInFormState("fat", fat);
    putStoredNutritionalDataInFormState("fibre", fibre);
    putStoredNutritionalDataInFormState("protein", protein);
    putStoredNutritionalDataInFormState("sugar", sugar);
    putStoredNutritionalDataInFormState("weight", weight);
  }, []);

  const handleRestore = () => {
    putStoredNutritionalDataInFormState("calories", entry.calories);
    putStoredNutritionalDataInFormState("carbohydrates", entry.carbohydrates);
    putStoredNutritionalDataInFormState("fat", entry.fat);
    putStoredNutritionalDataInFormState("fibre", entry.fibre);
    putStoredNutritionalDataInFormState("protein", entry.protein);
    putStoredNutritionalDataInFormState("sugar", entry.sugar);
    putStoredNutritionalDataInFormState("weight", entry.weight);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setStoredOnDB(false);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const checkIfUserHasChangedValue = (property: string, value: number) => {
    const currentValues = {
      calories,
      carbohydrates,
      fat,
      fibre,
      protein,
      sugar,
      weight,
    };

    if (value !== currentValues[property as keyof typeof currentValues]) {
      add({ [property]: value });
      setChangedValues((prev) => ({ ...prev, [property]: value }));
      return;
    }
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
        checkIfUserHasChangedValue(key, valueAsInt);
      }
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
    } else if (storedOnDB) {
      setCompletedStep(2);
      changeStep(6);
    } else {
      setErrors([]);
      setConfirmationScreen(true);
    }
  };

  return (
    <article className={styles.wrapper}>
      {!confirmationScreen && (
        <>
          <>
            <button
              className={styles.wrapper__btn}
              onClick={() => {
                //change this to completed step
                changeStep(0);
              }}
            >
              back to previous step
            </button>
            <h1 className={styles.wrapper__header}>nutrition</h1>
            <h2>for {name}</h2>

            <button
              className={styles.wrapper__btn}
              onClick={() => {
                handleRestore();
              }}
            >
              restore original nutritional content
            </button>
            {creator ? (
              <p className={styles.wrapper__prompt}>
                only add values for nutrition content you want to add
              </p>
            ) : (
              <section className={styles.wrapper__not__creator__section}>
                <p className={styles.wrapper__prompt}>
                  {`you are not the creator of this food, you can't change the
                nutritional values here if you want to create a food with
                different nutritional values please add a new food`}
                </p>
                <button
                  className={
                    styles.wrapper__not__creator__section__create__food_btn
                  }
                  onClick={() => {
                    changeStep(4);
                  }}
                >
                  create a new food
                </button>
              </section>
            )}
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
                  readOnly={!creator}
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
                  readOnly={!creator}
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
                  readOnly={!creator}
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
                  readOnly={!creator}
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
                  readOnly={!creator}
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
                  readOnly={!creator}
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
                  readOnly={!creator}
                  onChange={handleChange}
                  placeholder={`${weight}`}
                />
              </section>
              <button className={styles.wrapper__form__btn} type="submit">
                Submit
              </button>
            </form>
            {errors.length > 0 && (
              <ul>
                {errors.map((e: string, i: number) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>
            )}
          </>
        </>
      )}
      {confirmationScreen && (
        <Confirmation
          {...{ changedValues, confirmationScreen, setConfirmationScreen }}
        />
      )}
    </article>
  );
}
