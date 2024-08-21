import React, { useState, useCallback } from "react";
import styles from "./addMealStepper.module.scss";
import StepOne from "./stepOne/StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

interface stepperInterface {
  toggleMealStepper: () => void;
}

export default function AddMealStepper(props: stepperInterface) {
  const { toggleMealStepper } = props;
  const [step, setStep] = useState(0);
  const changeStep = useCallback((step: number) => {
    setStep(step);
  }, []);

  const steps = [
    <StepOne key={1} />,
    <StepTwo key={2} />,
    <StepThree key={3} />,
  ];
  return (
    <section className={styles.stepper__modal}>
      <h1 className={styles.stepper__modal__header}>add a meal</h1>
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
      <button onClick={toggleMealStepper}>back</button>
    </section>
  );
}
