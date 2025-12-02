import AddSpend from "../addspend/Addspend";
import Tospend from "../tospend/Tospend";
import { useEffect, useState } from "react";
import styles from "./Tospendlist.module.css";

export default function Tospendlist({ filter, onTotalChange }) {
  const [tospends, setTospends] = useState(() => readTospendFromLocalStorage());

  const handleAdd = (tospend) => setTospends([...tospends, tospend]);
  const handleUpdate = (updated) =>
    setTospends(tospends.map((t) => (t.id === updated.id ? updated : t)));
  const handleDelete = (deleted) =>
    setTospends(tospends.filter((t) => t.id !== deleted.id));

  useEffect(() => {
    localStorage.setItem("tospends", JSON.stringify(tospends));
  }, [tospends]);

  const filtered = getFilteredItems(tospends, filter);

  const total = filtered.reduce((sum, item) => {
    if (item.status === "complete") {
      return sum + extractPrice(item.text);
    }
    return sum;
  }, 0);

  useEffect(() => {
    onTotalChange(total);
  }, [total, onTotalChange]);

  return (
    <section className={styles.section}>
      <ul className={styles.list}>
        {filtered.map((item) => (
          <Tospend
            key={item.id}
            tospend={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddSpend onAdd={handleAdd} />
    </section>
  );
}

function getFilteredItems(tospends, filter) {
  if (filter === "all") {
    return tospends;
  }
  return tospends.filter((tospend) => tospend.status === filter);
}

function readTospendFromLocalStorage() {
  const tospends = localStorage.getItem("tospends");
  return tospends ? JSON.parse(tospends) : [];
}

function extractPrice(text) {
  const match = text.replace(/,/g, "").match(/(\d+)/);
  if (match) {
    return parseInt(match[0], 10);
  }
  return 0;
}
