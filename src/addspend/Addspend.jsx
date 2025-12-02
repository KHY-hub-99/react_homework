import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./AddSpend.module.css";

export default function AddSpend({ onAdd }) {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleTextChange = (e) => setText(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);
  const handleTimeChange = (e) => setTime(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0 || date === "" || time === "") {
      return;
    }
    onAdd({ id: uuidv4(), text, date, time, status: "active" });
    setText("");
    setDate("");
    setTime("");
  };

  return (
    <form className={`${styles.form} form-time`} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="장소/내용/소비금액"
        value={text}
        onChange={handleTextChange}
      />
      <div className={styles.inputGroup}>
        <input type="date" value={date} onChange={handleDateChange} />
        <input type="time" value={time} onChange={handleTimeChange} />
        <button>추가</button>
      </div>
    </form>
  );
}
