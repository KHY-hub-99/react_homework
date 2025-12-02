import { FaTrashAlt } from "react-icons/fa";
import styles from "./Tospend.module.css";

export default function Tospend({ tospend, onUpdate, onDelete }) {
  const { id, text, status, date, time } = tospend;
  const handleChange = (e) => {
    const status = e.target.checked ? "complete" : "active";
    onUpdate({ ...tospend, status });
  };
  const handleDelete = () => onDelete(tospend);

  return (
    <li className={styles.tospendItem}>
      <input
        type="checkbox"
        id={id}
        checked={status === "complete"}
        onChange={handleChange}
        className={styles.checkbox}
      />
      <label htmlFor={id} className={styles.label}>
        [{date} {time}] {text}
      </label>
      <span className={styles.dateTime}>
        <button onClick={handleDelete} className={styles.deleteButton}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}
