import React, { useEffect, useState } from "react";
import { IconTitle } from "../../components/IconTitle/IconTitle";
import { ProgressBar } from "../../components/ProgressBar/ProgressBar";
import { Question } from "../../components/Question/Question";
import { NextOrFinish } from "../../components/NextOrFinish/NextOrFinish";
import QuestionrAPI from "../../api/questions";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const [questions, setQuestions] = useState();
  const [pages, setPages] = useState({ numOfPages: 0, currentPage: 0 });
  const answers = useSelector((state) => state.answers);
  const [error, setError] = useState({ error: false, reason: "" });
  const navigate = useNavigate();

  /*local mockdata
  const fetchQuiz = async () => {
    const response = await QuestionrAPI.getQuestions();
    setQuestions(response.data);
    setPages({
      numOfPages: Math.ceil(response?.data?.questions.length / 2),
      currentPage: 0,
    });
  };*/

  //"https://c18009f6-5b1b-4d8f-adee-9764dc9426ff.mock.pstmn.io/user/quiz/random/error",
  // for 404

  const fetchQuiz = async () => {
    const response = await fetch(
      "https://c18009f6-5b1b-4d8f-adee-9764dc9426ff.mock.pstmn.io/user/quiz/random",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("bearerToken")}`,
        },
      }
    );

    if (!response.ok) {
      setError({ error: true, reason: "Failed to get the questions." });
      console.error(`Response status: ${response.status}`);
      return;
    }

    const json = await response.json();

    setQuestions(json);
    setPages({
      numOfPages: Math.ceil(json?.questions.length / 2),
      currentPage: 0,
    });
  };

  //"https://c18009f6-5b1b-4d8f-adee-9764dc9426ff.mock.pstmn.io/user/quiz/example/submit/error",
  const handleSubmitQuiz = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://c18009f6-5b1b-4d8f-adee-9764dc9426ff.mock.pstmn.io/user/quiz/example/submit",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("bearerToken")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(answers),
      }
    );
    if (!response.ok) {
      setError(true);
      console.error(`Response status: ${response.status}`);
      setError({ error: true, reason: "Failed to submit the quiz." });
      return;
    }
    navigate("/results");
  };

  useEffect(() => {
    fetchQuiz();
  }, []);

  const handleNextQuestions = () => {
    setPages({ ...pages, currentPage: ++pages.currentPage });
  };

  return (
    <>
      <IconTitle title={questions?.quizName} />

      {error.error && <h3>Failed to get the questions.</h3>}

      {!error.error &&
        questions?.questions &&
        questions?.questions.length > 0 && (
          <>
            <ProgressBar
              total={questions?.questions.length}
              answered={answers?.answers.length}
            />
            <Question question={questions?.questions[pages.currentPage * 2]} />
            {questions?.questions.length - 1 >= pages.currentPage * 2 + 1 && (
              <Question
                question={questions?.questions[pages.currentPage * 2 + 1]}
              />
            )}
          </>
        )}

      <NextOrFinish
        nextQuestions={handleNextQuestions}
        finalPage={pages.currentPage === pages.numOfPages - 1}
        submitQuiz={handleSubmitQuiz}
      />
    </>
  );
};

export default Quiz;
