import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState("");
  const [selectedDay, setSelectedDay] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue, selectedDay);
    setInputValue("");
    setSelectedDay("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{
          border: "1px solid #1461a1",
          borderRadius: "5px",
          padding: "10px",
          color: "white",
          backgroundColor: "#1461a1",
          marginBottom: "10px",
          marginRight: "10px",
          "::placeholder": { color: "white" },
        }}
        placeholder="Cerca città..."
      />
      <select
        value={selectedDay}
        onChange={(e) => setSelectedDay(e.target.value)}
        style={{
          border: "1px solid #1461a1",
          borderRadius: "5px",
          padding: "8px",
          color: "white",
          backgroundColor: "#1461a1",
          marginBottom: "10px",
          marginRight: "10px",
        }}
      >
        <option value="">Seleziona il giorno</option>
        <option value="Monday">Lunedì</option>
        <option value="Tuesday">Martedì</option>
        <option value="Wednesday">Mercoledì</option>
        <option value="Thursday">Giovedì</option>
        <option value="Friday">Venerdì</option>
        <option value="Saturday">Sabato</option>
        <option value="Sunday">Domenica</option>
      </select>
      <button
        type="submit"
        style={{
          backgroundColor: "#e07439",
          color: "white",
          border: "none",
          borderRadius: "5px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Cerca
      </button>
    </form>
  );
}

export default SearchBar;
