import React from "react";
import "./style.scss";

export const Balloon = ({ size, placeX, placeY }) => {
  return (
    <div
      className="balloon"
      style={{
        height: `${size * 1.5}vh`,
        width: `${size * 1.5}vh`,
        position: "absolute",
        ...placeX,
        ...placeY,
      }}
    ></div>
  );
};
