import styles from "./diary.module.scss";

export default function Diary() {
  return (
    <section>
      <article>
        <table className={styles.test}>
          <tbody>
            <tr>
              <th>Meal</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
              <th>Sunday</th>
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
