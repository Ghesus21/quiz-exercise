import React from "react";
import "./style.scss";

export const ProgressBar = ({ answered, total }) => {
  return (
    <div className="progress-container">
      <div className="progressbar">
        <div
          className="progress"
          style={{ width: `${(answered / total) * 100}%` }}
        ></div>
      </div>

      <div className="answered">
        <span>{`${total - answered}/${total} remaining`}</span>
      </div>
    </div>
  );
};
