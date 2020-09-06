export const quizActionTypes = {
  SET_SELECTED_TEST: 'SET_SELECTED_TEST',
  SET_QUIZ_IS_DONE: 'SET_QUIZ_IS_DONE',
  SET_ALL_ANSWERS: 'SET_ALL_ANSWERS',
  NEXT_QUESTION: 'NEXT_QUESTION',
  PREVIOUS_QUESTION: 'PREVIOUS_QUESTION',
  CHOOSE_QUESTION: 'CHOOSE_QUESTION',
  SET_SELECTED_ANSWER: 'SET_SELECTED_ANSWER',
};

export const quizActions = {
  setSelectedTest: test => ({
    type: quizActionTypes.SET_SELECTED_TEST, payload: test
  }),
  setQuizIsDone: (bool) => ({
    type: quizActionTypes.SET_QUIZ_IS_DONE, payload: bool
  }),
  setAllAnswers: () => ({
    type: quizActionTypes.SET_ALL_ANSWERS
  }),
  nextQuestion: () => ({
    type: quizActionTypes.NEXT_QUESTION
  }),
  previousQuestion: () => ({
    type: quizActionTypes.PREVIOUS_QUESTION
  }),
  chooseQuestion: (number) => ({
    type: quizActionTypes.CHOOSE_QUESTION, payload: number
  }),
  setSelectedAnswer: (questionIndex, answerId) => ({
    type: quizActionTypes.SET_SELECTED_ANSWER, payload: {questionIndex, answerId}
  }),
};
