import React from "react";
import "./style.scss";

export const NavBar = () => {
  return (
    <div className="top-navbar">
      <img
        src="/images/TalentAdoreLogo.svg"
        style={{ height: "40px", margin: "8px" }}
      />

      <div className="user-info">
        <div className="user-logo">
          <img
            src="/images/user-01.svg"
            style={{ height: "20px", margin: "8px" }}
          />
        </div>
        <span>Example User</span>

        <div className="arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-down"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
