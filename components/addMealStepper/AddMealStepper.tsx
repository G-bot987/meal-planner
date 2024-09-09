import React, { useCallback, useEffect } from "react";
import styles from "./addMealStepper.module.scss";
import StepOne from "./stepOne/StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import { choosenFoodOrMeal, mealStepperStore } from "@/zustland/store/store";

interface STEPPERINTERFACE {
  toggleMealStepper: () => void;
  day: DAYINTERFACE;
  meal: string;
}
interface DAYINTERFACE {
  date: string;
  day: string;
}

export default function AddMealStepper(props: STEPPERINTERFACE) {
  const { toggleMealStepper, day, meal } = props;
  //global state
  const food = choosenFoodOrMeal((state) => state.food);
  const { setStepForMealStepper } = mealStepperStore();
  const choosenStep = mealStepperStore((state) => state.step);

  const changeStep = useCallback(
    (step: number) => {
      switch (true) {
        case food !== undefined && food !== null:
          setStepForMealStepper(step);
          break;
        default:
          console.log("food not set");
          break;
      }
    },
    [food]
  );

  const steps = [
    <StepOne key={1} />,
    <StepTwo key={2} />,
    <StepThree key={3} />,
  ];

  useEffect(() => {
    setStepForMealStepper(0);
  }, []);

  return (
    <section className={styles.stepper__modal}>
      <h1 className={styles.stepper__modal__header}>
        {day.date} adding {meal}
      </h1>
      <ul className={styles.stepper__modal__stepper__list}>
        <li>
          <button
            className={styles.stepper__modal__stepper__list__btn}
            onClick={() => changeStep(0)}
          >
            search
          </button>
        </li>
        <li>
          <button
            className={styles.stepper__modal__stepper__list__btn}
            onClick={() => changeStep(1)}
          >
            check nutrition
          </button>
        </li>
        <li>
          <button
            className={styles.stepper__modal__stepper__list__btn}
            onClick={() => changeStep(2)}
          >
            add
          </button>
        </li>
      </ul>
      {steps[choosenStep]}
      <button
        className={styles.stepper__modal__button}
        onClick={toggleMealStepper}
      >
        back to diary
      </button>
    </section>
  );
}
