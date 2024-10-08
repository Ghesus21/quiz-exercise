import React from "react";
import "./style.scss";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { setAnswer } from "../../redux/answerSlice";

export const Question = ({ question, result = false }) => {
  const answers = useSelector((state) => state.answers);
  const dispatch = useDispatch();

  const handleClick = (key) => {
    if (result) return;
    dispatch(setAnswer({ questionId: question.id, answer: key }));
  };

  const checkIfSelected = (key) => {
    const findAnswer = answers.answers.find(
      (answer) => answer.questionId === question.id
    );
    if (findAnswer && findAnswer.answer === key) {
      return "question-selected";
    } else return "";
  };

  const checkResult = (key) => {
    if (question.correctAnswer === key) return "correct-answer result-question";
    if (question.userAnswer === key) return "question-selected result-question";
    return "result-question";
  };

  const checkAdditionalHighLight = (key) => {
    if (result === false) {
      return checkIfSelected(key);
    } else return checkResult(key);
  };

  return (
    <>
      <div className="question">
        <h6>{question?.question}</h6>
      </div>
      <div className="question-options">
        {question?.choices &&
          Object.entries(question?.choices).map(([key, value]) => {
            return (
              <Button
                key={`${key}_${value}`}
                className={`question-button ${checkAdditionalHighLight(key)}`}
                onClick={() => handleClick(key)}
              >
                {value}
              </Button>
            );
          })}
      </div>
    </>
  );
};
