import React, { useCallback, useEffect } from "react";
import styles from "./addMealStepper.module.scss";
import StepOne from "./stepOne/StepOne";
import StepThree from "./stepThree/StepThree";
import StepFour from "./stepFour/StepFour";
import { createNewStore } from "@/zustland/store/store";
import NewFood from "./stepTwo/NewFood";

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
    <NewFood key={2} />,
    <StepThree key={3} />,
    <StepFour key={4} />,
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
            onClick={() => handleStepChange(2)}
          >
            check nutrition
          </button>
        </li>
        <li>
          <button
            className={styles.stepper__modal__stepper__list__btn}
            onClick={() => handleStepChange(3)}
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
