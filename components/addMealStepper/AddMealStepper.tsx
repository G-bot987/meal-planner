import React, { useState, useCallback, useEffect } from "react";
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
  const [step, setStep] = useState(0);
  const changeStep = useCallback((step: number) => {
    setStep(step);
  }, []);

  const steps = [
    <StepOne key={1} />,
    <StepTwo key={2} />,
    <StepThree key={3} />,
  ];

  const { setZustlandStep } = mealStepperStore();

  useEffect(() => {
    setZustlandStep(0);
  }, []);

  const nextStep = mealStepperStore((state) => state.step);

  useEffect(() => {
    setStep(nextStep);
  }, [nextStep]);

  return (
    <section className={styles.stepper__modal}>
      <h1 className={styles.stepper__modal__header}>
        {day.date} adding {meal}
      </h1>
      <ul className={styles.stepper__modal__stepper__list}>
        <li>
          <button onClick={() => changeStep(0)}>search</button>
        </li>
        <li>
          <button onClick={() => changeStep(1)}>check nutrition</button>
        </li>
        <li>
          <button onClick={() => changeStep(2)}>add</button>
        </li>
      </ul>
      {steps[step]}
      <button onClick={toggleMealStepper}>back to diary</button>
    </section>
  );
}
