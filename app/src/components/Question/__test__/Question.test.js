import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../../../redux/store";
import { Provider } from "react-redux";

import { Question } from "../Question";
import { mockQuestion } from "./mockQuestion";

describe("Question", () => {
  it("renders if question is null", () => {
    render(
      <Provider store={store}>
        <Router>
          <Question question={null} />
        </Router>
      </Provider>
    );
  });

  it("correctly formatted question", async () => {
    render(
      <Provider store={store}>
        <Router>
          <Question question={mockQuestion} />
        </Router>
      </Provider>
    );

    const choiceOptions = await screen.findAllByRole("button");
    expect(choiceOptions).toHaveLength(4);

    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("Bitcoin");
  });
});
