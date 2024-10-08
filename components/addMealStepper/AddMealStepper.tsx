import React, { useCallback, useEffect } from "react";
import styles from "./addMealStepper.module.scss";
import StepOne from "./stepOne/StepOne";
import StepTwo from "./stepTwo/StepTwo";
import StepThree from "./stepThree/StepThree";
import { createNewStore } from "@/zustland/store/store";

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
  const food = createNewStore((state) => state.entry);
  const { changeStep } = createNewStore();
  const choosenStep = createNewStore((state) => state.step);

  const handleStepChange = useCallback(
    (step: number) => {
      switch (true) {
        case food.name !== null:
          changeStep(step);
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
    changeStep(0);
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
            onClick={() => handleStepChange(0)}
          >
            search
          </button>
        </li>
        <li>
          <button
            className={styles.stepper__modal__stepper__list__btn}
            onClick={() => handleStepChange(1)}
          >
            check nutrition
          </button>
        </li>
        <li>
          <button
            className={styles.stepper__modal__stepper__list__btn}
            onClick={() => handleStepChange(2)}
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
