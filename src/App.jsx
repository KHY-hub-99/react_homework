import React, { useState } from "react";
// import { DarkModeProvider } from "./context/";
import "./App.css";
import Header from "./header/Header";
import Tospendlist from "./tospendlist/Tospendlist";

const filters = ["all", "active", "complete"];

function App() {
  const [filter, setFilter] = useState(filters[0]);
  const [total, setTotal] = useState(0);

  const handleTotalChange = (newTotal) => {
    setTotal(newTotal);
  };
  return (
    <>
      <Header
        filters={filters}
        filter={filter}
        onFilterChange={setFilter}
        total={total}
      />
      <Tospendlist filter={filter} onTotalChange={handleTotalChange} />
    </>
  );
}

export default App;
