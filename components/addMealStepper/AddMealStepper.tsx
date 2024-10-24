import React, { useCallback, useEffect } from "react";
import styles from "./addMealStepper.module.scss";

import StepOne from "./steps/searchSteps/stepOne/StepOne";
import NewFood from "./steps/createSteps/create/new/createNewFoodSteps/stepTwo/NewFood";
import StepFive from "./steps/NutritionalSteps/stepFive/StepFive";
import StepEight from "./steps/SubmissionSteps/stepEight/StepEight";

import { createNewStore } from "@/zustland/store/store";
import CreateNew from "./steps/createSteps/create/CreateNew";
import Search from "./steps/searchSteps/stepOne/search/Search";
import New from "./steps/createSteps/create/new/New";

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
      //this needs innovating to work off completed steps
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
    <Search key={2} />,
    <CreateNew key={3} />,
    <New key={4} />,
    <NewFood key={5} />,
    <StepFive key={6} />,
    <StepEight key={7} />,
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
            onClick={() => handleStepChange(5)}
          >
            check nutrition
          </button>
        </li>
        <li>
          <button
            className={styles.stepper__modal__stepper__list__btn}
            onClick={() => handleStepChange(6)}
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
