import store from '../configureStore';
import {
  fetchQuestions, setChoice, countAnswer,
} from '../Questions/Questions';

describe('test the store', () => {
  it('check if the store is initialy empty array', () => {
    expect(store.getState().questions.list).toEqual([]);
  });
  it('checks if the store has five elements ', async () => {
    await store.dispatch(fetchQuestions('https://opentdb.com/api.php?amount=5'));
    expect(store.getState().questions.list.length).toEqual(5);
  });
  it('checks if the count of answered questions is zero initially', async () => {
    expect(store.getState().questions.count).toEqual(0);
  });
  it('checks if the number of correctly answered questions is five ', async () => {
    store.getState().questions.list.forEach((question) => {
      store.dispatch(setChoice([question.id, question.correctAnswer]));
    });
    store.dispatch(countAnswer());
    expect(store.getState().questions.count).toEqual(5);
  });
});
