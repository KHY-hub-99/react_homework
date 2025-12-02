import styles from "./Header.module.css";

export default function Header({ filters, filter, onFilterChange, total }) {
  return (
    <header className={styles.header}>
      {filter === "complete" && (
        <div className={styles.totalDisplay}>
          완료된 지출 합계:
          <span className={styles.totalAmount}>{total.toLocaleString()}원</span>
        </div>
      )}
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${
                filter === value && styles.selected
              }`}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
