import React from "react";
import "./style.scss";

export const IconTitle = ({ title }) => {
  return (
    <>
      <div className="icon-title">
        <div className="quiz-logo">
          <img
            src="/images/puzzle-piece-02.svg"
            style={{ height: "40px", margin: "8px" }}
          />
        </div>
        <h2>{title}</h2>
      </div>
      <hr style={{ marginTop: "0px" }} />
    </>
  );
};
