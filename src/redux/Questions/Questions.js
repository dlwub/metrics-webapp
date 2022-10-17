import { v4 as uuidv4 } from 'uuid';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchQuestions = createAsyncThunk('questions/fetch', async (url) => {
  const response = await fetch(url);
  const result = await response.json();
  return result;
});

const questionsSlice = createSlice({
  name: 'questions',
  initialState: {
    loading: false,
    list: [],
    error: '',
    count: 0,
  },

  reducers: {
    setColor: (state) => {
      state.list.forEach((question) => {
        document.getElementById(question.selected).style.background = 'red';
        document.getElementById(question.correctAnswer).style.background = 'green';
      });
    },
    countAnswer: (state) => {
      let counter = 0;
      state.list.forEach((question) => {
        if (question.correctAnswer === question.selected) {
          counter += 1;
        }
      });
      return {
        ...state,
        count: counter,
      };
    },
    setChoice: (state, action) => ({
      ...state,
      list: state.list.map((question) => {
        if (question.id === action.payload[0]) {
          return {
            ...question,
            selected: action.payload[1],
          };
        }
        return question;
      }),
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.pending, (state) => ({ ...state, loading: true }));
    builder.addCase(fetchQuestions.fulfilled, (state, action) => ({
      ...state,
      list: action.payload.results.map((question) => ({
        id: uuidv4(),
        question: question.question,
        correctAnswer: question.correct_answer,
        choices: [...question.incorrect_answers,
          question.correct_answer].sort(() => ((Math.random() > 0.5) ? 1 : -1)),
        selected: '',
      })),
    }));
    builder.addCase(fetchQuestions.rejected, (state, action) => ({
      ...state, loading: false, error: action.payload,
    }));
  },
});

export default questionsSlice.reducer;
export const {
  setColor, countAnswer, setChoice,
} = questionsSlice.actions;
