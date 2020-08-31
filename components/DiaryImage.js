import { h } from "../lib/preact.js";
import { useState, useEffect, useRef } from "../lib/hooks.js";
import htm from "../lib/htm.js";
const html = htm.bind(h);

const LOADING_DELAY_MS = 300;

const imageUrl = (diary, month, day, expanded) => {
  const cloudinaryTransforms = [
    !expanded ? "w_510" : null,
    "f_auto"
  ].filter(Boolean);
  return `https://res.cloudinary.com/deokkocoo/image/upload/${cloudinaryTransforms.join(",")}/${diary}/${month}/${day}.jpg`;
};

const DiaryImage = ({ diary, month, day, offset, showPercent }) => {
  const [expanded, setExpanded] = useState(false);
  const [src, setSrc] = useState("");
  const imageNode = useRef(null);

  useEffect(() => {
    let intersectionTimer = null;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!intersectionTimer) {
            intersectionTimer = setTimeout(() => {
              setSrc(imageUrl(diary, month, day, expanded));
              observer.unobserve(entry.target);
            }, LOADING_DELAY_MS);
          }
        } else {
          clearTimeout(intersectionTimer);
          intersectionTimer = null;
        }
      });
    });

    observer.observe(imageNode.current);

    return function cleanup() {
      observer.disconnect();
      if (intersectionTimer) {
        clearTimeout(intersectionTimer);
        intersectionTimer = null;
      }
    };
  }, [diary, month, day]);

  const handleExpandClick = () => {
    // Hooks batch state updates in event handlers, so `expanded` doesn't change
    // in setExpanded() even though we need the new value for setSrc, so we
    // have to use the new value manually
    const newExpanded = !expanded;
    setExpanded(newExpanded);
    setSrc(imageUrl(diary, month, day, newExpanded));
  };

  return html`
    <button
      className="${["image-button", expanded ? "--expanded" : null]
        .filter(Boolean)
        .join(" ")}"
      onclick="${handleExpandClick}"
    >
      <div
        className="image-viewport"
        style="padding-top: ${showPercent || 20}%"
      >
        <!-- Don't adjust top until IntersectionObserver has seen the image -->
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
