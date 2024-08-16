import styles from "./diary.module.scss";

export default function Diary() {
  return (
    <section>
      <article className={styles.table__wrapper}>
        <table className={styles.table__wrapper__table}>
          <tbody>
            <tr className={styles.table__wrapper__table__top__row}>
              <th
                className={
                  styles.table__wrapper__table__top__row__meal__collumn
                }
              >
                Meal
              </th>
              <th
                className={styles.table__wrapper__table__top__row__day__collumn}
              >
                Monday
              </th>
              <th
                className={styles.table__wrapper__table__top__row__day__collumn}
              >
                Tuesday
              </th>
              <th
                className={styles.table__wrapper__table__top__row__day__collumn}
              >
                Wednesday
              </th>
              <th
                className={styles.table__wrapper__table__top__row__day__collumn}
              >
                Thursday
              </th>
              <th
                className={styles.table__wrapper__table__top__row__day__collumn}
              >
                Friday
              </th>
              <th
                className={styles.table__wrapper__table__top__row__day__collumn}
              >
                Saturday
              </th>
              <th
                className={styles.table__wrapper__table__top__row__day__collumn}
              >
                Sunday
              </th>
            </tr>
            <tr>
              <td>Breakfast</td>
            </tr>
            <tr>
              <td>Lunch</td>
            </tr>
            <tr>
              <td>Post workout</td>
            </tr>
            <tr>
              <td>Dinner</td>
            </tr>
            <tr>
              <td>snacks</td>
            </tr>
          </tbody>
        </table>
      </article>
    </section>
  );
}
