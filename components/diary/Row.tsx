import { useCallback, useState } from "react";
import styles from "./diary.module.scss";
import AddMealStepper from "../addMealStepper/AddMealStepper";

interface mealInterface {
  meal: string;
  index: number;
  toggleMealStepper: any;
}
export default function Row(props: mealInterface) {
  const { meal, index, toggleMealStepper } = props;
  const [logged, setLogged] = useState(false);

  return (
    <>
      <tr>
        <td
          className={`${styles.table__wrapper__table__meal__row}  ${
            index === 4 ? styles["table__wrapper__table__meal__row__last"] : ""
          }`}
        >
          {meal}
        </td>
        <td>
          <button
            onClick={toggleMealStepper}
            className={styles.table__wrapper__table__meal__row__btn}
          >
            add
          </button>
        </td>
      </tr>
      {logged && (
        <tr>
          <td>logged</td>
          <td>data</td>
        </tr>
      )}
    </>
  );
}
