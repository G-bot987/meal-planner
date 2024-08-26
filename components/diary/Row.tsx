import { useCallback, useState } from "react";
import styles from "./diary.module.scss";
import AddMealStepper from "../addMealStepper/AddMealStepper";

import useStore from "@/zustland/store/store";

interface mealInterface {
  meal: string;
  index: number;
  toggleMealStepper: any;
}
export default function Row(props: mealInterface) {
  const { meal, index, toggleMealStepper } = props;
  const [logged, setLogged] = useState(false);

  const { setIndex } = useStore();

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
            onClick={() => {
              toggleMealStepper();
              setIndex(index);
            }}
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
