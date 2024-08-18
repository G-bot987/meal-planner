import { tr } from "date-fns/locale";
import { useState } from "react";

interface mealInterface {
  meal: string;
}
export default function Row(props: mealInterface) {
  const { meal } = props;
  const [logged, setLogged] = useState(null);
  const [showAddMenu, setShowAddmenu] = useState(false);
  return (
    <>
      <tr>
        <td>{meal}</td>
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
