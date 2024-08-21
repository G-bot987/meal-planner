import { useState } from "react";
import styles from "./diary.module.scss";
import AddMealStepper from "../addMealStepper/AddMealStepper";

interface mealInterface {
  meal: string;
  index: number;
}
export default function Row(props: mealInterface) {
  const { meal, index } = props;
  const [logged, setLogged] = useState(false);
  const [showAddMenu, setShowAddmenu] = useState(false);
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
              setShowAddmenu(!showAddMenu);
            }}
            className={styles.table__wrapper__table__meal__row__btn}
          >
            add
          </button>
          {showAddMenu && <AddMealStepper />}
        </td>
      </tr>
      {logged && (
        <tr>
          <td>logged</td>
          <td>quack</td>
        </tr>
      )}
    </>
  );
}
