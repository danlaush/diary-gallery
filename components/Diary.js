import { h } from "../lib/preact.js";
import { useState, useEffect } from "../lib/hooks.js";
import htm from "../lib/htm.js";
import DiaryImage from "./DiaryImage.js";
const html = htm.bind(h);

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Diary = () => {
  const { path } = window.config;
  const [entries, setEntries] = useState({});
  const [activeYearIndex, setActiveYearIndex] = useState();
  const [yearOptions, setYearOptions] = useState([]);

  const activeYear = yearOptions[activeYearIndex];

  const handlePrevYearClick = () => {
    setActiveYearIndex(Math.max(activeYearIndex - 1, 0));
  };

  const handleNextYearClick = () => {
    setActiveYearIndex(Math.min(activeYearIndex + 1, yearOptions.length - 1));
  };

  // Initial fetch, returns list of available years
  useEffect(() => {
    fetch(`${path}/data/years.json`)
      .then((res) => res.json())
      .then((years) => {
        setYearOptions(years);
        setActiveYearIndex(0);
      });
  }, []);

  // Fetch entries when the year changes
  useEffect(() => {
    if (!activeYear) return;
    fetch(`${path}/data/${activeYear}.json`)
      .then((res) => res.json())
      .then(setEntries);
  }, [activeYearIndex]);

  const showPrevYearButton = activeYearIndex === 0;
  const showNextYearButton = activeYearIndex === yearOptions.length - 1;

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
      ${Object.keys(entries).map(
        (month) => html`
          <div className="month">
            <h3 className="month-name">
              ${monthNames[parseInt(month) - 1]}
            </h3>
            <ul className="days">
              ${Object.keys(entries[month])
                .sort()
                .map((day) => {
                  const { text, offset, showPercent } = entries[month][day];
                  return html`
                    <li className="day">
                      <p class="entry"><strong>${day}:</strong> ${text}</p>
                      <p>
                        <${DiaryImage}
                          url="${path}/assets/jpg/01/${month}/${day}.jpg"
                          offset="${offset}"
                          showPercent="${showPercent}"
                        />
                      </p>
                    </li>
                  `;
                })}
            </ul>
          </div>
        `
      )}
    </div>
  `;
};

export default Diary;
