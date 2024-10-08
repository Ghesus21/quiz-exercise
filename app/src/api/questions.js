import { questions, results } from "./mockData";

class QuestionAPI {
  getQuestions = () =>
    new Promise((resolve, reject) => {
      setTimeout(
        () =>
          resolve({
            status: 200,
            data: JSON.parse(JSON.stringify(questions)),
          }),
        250
      );
    });

  getResults = () =>
    new Promise((resolve, reject) => {
      setTimeout(
        () =>
          resolve({
            status: 200,
            data: JSON.parse(JSON.stringify(results)),
          }),
        250
      );
    });
}

export default new QuestionAPI();
