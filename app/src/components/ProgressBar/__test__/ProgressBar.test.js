import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { ProgressBar } from "../ProgressBar";

describe("Progressbar", () => {
  it("correctly formatted progressbar", () => {
    render(<ProgressBar answered={4} total={4} />);

    const statusText = screen.getByText(/remaining/);
    expect(statusText).toHaveTextContent("0");
  });
});
