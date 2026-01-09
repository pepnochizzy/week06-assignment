import { useState } from "react";

// import { useEffect, useState } from "react";
export default function Search({ handler }) {
  const [value, setValue] = useState("");
  function handleChange(e) {
    setValue(e.target.value);
    console.log(e.target.value);
  }
  return (
    <>
      <input
        type="text"
        placeholder="search Unsplash"
        value={value}
        onChange={handleChange}
      />
      <button className="searchButton" onClick={() => handler(value)}>
        Search
      </button>
    </>
  );
}
