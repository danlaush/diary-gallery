import { h } from "../lib/preact.js";
import { useState, useEffect, useRef } from "../lib/hooks.js";
import htm from "../lib/htm.js";
const html = htm.bind(h);

const DiaryImage = ({ url, offset, showPercent }) => {
  const [expanded, setExpanded] = useState(false);
  const [src, setSrc] = useState("");
  const imageNode = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSrc(url);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(imageNode.current);

    return function cleanup() {
      observer.disconnect();
    }
  }, [url]);

  return html`
    <button
      className="${["image-button", expanded ? "--expanded" : null]
        .filter(Boolean)
        .join(" ")}"
      onclick="${() => setExpanded(!expanded)}"
    >
      <div
        className="image-viewport"
        style="padding-top: ${showPercent || 20}%"
      >
        <!-- Don't adjust position until IntersectionObserver has seen the image -->
        <img
          src="${src}"
          className="image"
          style="${src && `top: -${offset || 0}%`}"
          onclick="${(e) => {
            if (expanded) e.stopPropagation();
          }}"
          ref="${imageNode}"
        />
      </div>
      <span className="image-zoom">Zoom 🔎</span>
    </button>
  `;
};

export default DiaryImage;
