import { h } from "../lib/preact.js";
import { useState, useEffect } from "../lib/hooks.js";
import htm from "../lib/htm.js";
import DiaryMonth from "./DiaryMonth.js";
const html = htm.bind(h);

const availableData = {
  "1940": ["01", "02", '03'],
  "1942": ["01", "02", "03"],
  "1943": ["01", "02", "03"],
  "1944": ["01", "02", "03"]
};

const yearOptions = Object.keys(availableData);

const Diary = () => {
  const [activeYearIndex, setActiveYearIndex] = useState(0);

  const activeYear = yearOptions[activeYearIndex];

  const showPrevYearButton = activeYearIndex === 0;
  const showNextYearButton = activeYearIndex === yearOptions.length - 1;

  const handlePrevYearClick = () => {
    setActiveYearIndex(Math.max(activeYearIndex - 1, 0));
  };

  const handleNextYearClick = () => {
    setActiveYearIndex(Math.min(activeYearIndex + 1, yearOptions.length - 1));
  };

  return html`
    <div className="container">
      <h2>
        <button
          className="year-picker"
          onClick="${handlePrevYearClick}"
          disabled="${showPrevYearButton}"
        >
          «
        </button>
        <span className="year">${activeYear}</span>
        <button
          className="year-picker"
          onClick="${handleNextYearClick}"
          disabled="${showNextYearButton}"
        >
          »
        </button>
      </h2>
      ${availableData[activeYear].map(
        (month) => html`<${DiaryMonth} year="${activeYear}" month="${month}" />`
      )}
    </div>
  `;
};

export default Diary;
