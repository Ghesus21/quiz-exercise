import { configureStore } from "@reduxjs/toolkit";
import answersReducer from "./answerSlice";

export default configureStore({
  reducer: {
    answers: answersReducer,
  },
});
