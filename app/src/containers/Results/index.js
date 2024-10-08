import React, { useEffect, useState } from "react";
import { IconTitle } from "../../components/IconTitle/IconTitle";
import { ProgressBar } from "../../components/ProgressBar/ProgressBar";
import { Question } from "../../components/Question/Question";
import { NextOrFinish } from "../../components/NextOrFinish/NextOrFinish";
import UserAPI from "../../api/questions";

const Results = () => {
  const [results, setResults] = useState();
  const [error, setError] = useState(false);

  /* local mock
  const fetchResults = async () => {
    const response = await UserAPI.getResults();
    setResults(response.data);
  };*/

  // https://c18009f6-5b1b-4d8f-adee-9764dc9426ff.mock.pstmn.io/user/quiz/example/result/error

  const fetchResults = async () => {
    const response = await fetch(
      "https://c18009f6-5b1b-4d8f-adee-9764dc9426ff.mock.pstmn.io/user/quiz/example/result",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("bearerToken")}`,
        },
      }
    );

    if (!response.ok) {
      setError(true);
      console.error(`Response status: ${response.status}`);
      return;
    }
    const json = await response.json();
    setResults(json);
  };

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <>
      <IconTitle title="Results" />

      {error && <h3>Failed to get the results.</h3>}
      {results?.resultDetails?.length > 0 && (
        <>
          {results.resultDetails.map((result) => (
            <Question question={result} result={true} key={result.questionId} />
          ))}
        </>
      )}
    </>
  );
};

export default Results;
