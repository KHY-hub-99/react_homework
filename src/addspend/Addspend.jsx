import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./AddSpend.module.css";

export default function AddSpend({ onAdd }) {
  const [place, setPlace] = useState("");
  const [content, setContent] = useState("");
  const [money, setMoney] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handlePlaceChange = (e) => setPlace(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);
  const handleMoneyChange = (e) => setMoney(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);
  const handleTimeChange = (e) => setTime(e.target.value);

  // ⭐️ 1. 현재 날짜 포맷팅 함수 (YYYY-MM-DD)
  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    // 월과 일을 '00' 형식으로 포맷팅 (예: 12, 05)
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // ⭐️ 2. 현재 날짜 설정 핸들러
  const handleSetCurrentDate = () => {
    setDate(getCurrentDate());
  };

  // 시간을 가져오는 함수
  const getCurrentTime = () => {
    const now = new Date();
    // 시간을 '00' 형식으로 포맷팅 (예: 9 -> 09)
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const handleSetCurrentTime = () => {
    setTime(getCurrentTime());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      place.trim().length === 0 ||
      content.trim().length === 0 ||
      money.trim().length === 0 ||
      date === "" ||
      time === ""
    ) {
      return;
    }
    onAdd({
      id: uuidv4(),
      place,
      content,
      money,
      date,
      time,
      status: "active",
    });
    setPlace("");
    setContent("");
    setMoney("");
    setDate("");
    setTime("");
  };

  return (
    <form className={`${styles.form}`} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="장소"
        value={place}
        onChange={handlePlaceChange}
      />
      <input
        type="text"
        placeholder="내용"
        value={content}
        onChange={handleContentChange}
      />
      <input
        type="number"
        placeholder="금액"
        value={money}
        onChange={handleMoneyChange}
      />

      {/* 날짜, 시간, 추가 버튼 그룹 */}
      <div className={styles.timeInputWrapper}>
        {/* ⭐️ 날짜 그룹: 버튼과 입력 필드 */}
        <div className={styles.dateGroup}>
          <button
            type="button"
            onClick={handleSetCurrentDate}
            className={styles.currentDateButton}
          >
            오늘 날짜
          </button>
          <input type="date" value={date} onChange={handleDateChange} />
        </div>

        {/* 시간 그룹: 버튼과 입력 필드 */}
        <div className={styles.timeGroup}>
          <button
            type="button"
            onClick={handleSetCurrentTime}
            className={styles.currentTimeButton}
          >
            현재 시간
          </button>
          <input type="time" value={time} onChange={handleTimeChange} />
        </div>

        <button type="submit" className={styles.addButton}>
          추가
        </button>
      </div>
    </form>
  );
}
