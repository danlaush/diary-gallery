import { h } from "../lib/preact.js";
import { useState, useEffect } from "../lib/hooks.js";
import htm from "../lib/htm.js";
import DiaryImage from "./DiaryImage.js";
const html = htm.bind(h);

const MONTH_NAMES = [
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

// There are 2 diaries, each with a set of years
const YEAR_TO_DIARY = {
  1940: '01',
  1942: '01',
  1943: '01',
  1944: '01',
  1950: '02',
  1951: '02',
  1952: '02',
  1953: '02',
}

const DiaryMonth = ({ year, month }) => {
  const { path } = window.config;
  const [entries, setEntries] = useState({});

  useEffect(() => {
    try {
      fetch(`${path}/data/${year}/${month}.json`)
      .then((res) => res.json())
      .then(setEntries);
    } catch(e) {

    }
  }, [year, month]);

  return html`
    <div className="month">
      <h3 className="month-name">
        ${MONTH_NAMES[parseInt(month) - 1]}
      </h3>
      <ul className="days">
        ${Object.keys(entries)
          .sort()
          .map((day) => {
            const { text, offset, showPercent } = entries[day];
            return html`
              <li className="day">
                <p class="entry"><strong>${day}:</strong> ${text}</p>
                <p>
                  <${DiaryImage}
                    diary="${YEAR_TO_DIARY[year]}"
                    month="${month}"
                    day="${day}"
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
}

export default DiaryMonth;
