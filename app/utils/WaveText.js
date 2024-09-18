import React from "react";

const WaveText = ({ text, styles }) => {
  return (
    <div className="wave-container">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`wave ${char === " " ? "space" : ""} ${styles}`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {char === " " ? "\u00A0" : char} {/* Non-breaking space for spaces */}
        </span>
      ))}
    </div>
  );
};

export default WaveText;
