import { createSlice } from "@reduxjs/toolkit";

export const answersSlice = createSlice({
  name: "answers",
  initialState: {
    answers: [],
  },
  reducers: {
    setAnswer: (state, action) => {
      const indexOfOld = state.answers.findIndex(
        (answer) => answer.questionId === action.payload.questionId
      );
      if (indexOfOld === -1) {
        state.answers.push(action.payload);
      } else {
        state.answers[indexOfOld] = action.payload;
      }
    },
  },
});

export const { setAnswer } = answersSlice.actions;

export default answersSlice.reducer;
