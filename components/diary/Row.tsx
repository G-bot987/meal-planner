import { useState } from "react";
import styles from "./diary.module.scss";

interface mealInterface {
  meal: string;
  index: number;
}
export default function Row(props: mealInterface) {
  const { meal, index } = props;
  const [logged, setLogged] = useState(null);
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
          >
            add{" "}
          </button>
          {showAddMenu && (
            <ul>
              <li>its</li>
              <li>time </li>
              <li>to add</li>
              <li>a meal</li>
            </ul>
          )}
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
