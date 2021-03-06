import { quizActionTypes } from "../actions/quizActions";
import test from '../../data/tests'

export const quizInitialState = {
  allQuizzes: test,

  selectedQuiz: {},
  activeQuestion: 0,
  answerLabels: ['A', 'B', 'C', 'D'],
  quizIsDone: false,
};

export default function (state = quizInitialState, action) {
  switch (action.type) {

    case quizActionTypes.SET_SELECTED_TEST: {
      return {
        ...state,
        selectedQuiz: {
          ...action.payload,
        }
      }
    }

    case quizActionTypes.SET_SELECTED_ANSWER: {

      const { questionIndex, answerId } = action.payload;
      const questions = [ ...state.selectedQuiz.questions ]
      const newQuestionState = { ...questions[questionIndex] };

      newQuestionState.selectedAnswer = answerId;
      questions[questionIndex] = newQuestionState;

      return {
        ...state,
        selectedQuiz: {
          ...state.selectedQuiz,
          questions: [
            ...questions
          ]
        }
      }
    }

    case quizActionTypes.SET_QUIZ_IS_DONE: {
      return {
        ...state,
        quizIsDone: action.payload
      }
    }

    case quizActionTypes.SET_ALL_ANSWERS: {
      return {
        ...state,
        selectedQuiz: {
          ...state.selectedQuiz,
          questions: [
            ...state.selectedQuiz.questions.map(el => Object.assign(el, el.selectedAnswer = 1))
          ]
        }
      }
    }

    case quizActionTypes.NEXT_QUESTION: {
      if (state.activeQuestion !== state.selectedQuiz.questions.length - 1) {
        return {
          ...state,
          activeQuestion: state.activeQuestion + 1
        }
      } else {
        return {...state}
      }
    }

    case quizActionTypes.PREVIOUS_QUESTION: {
      if (!(state.activeQuestion === 0)) {
        return {
          ...state,
          activeQuestion: state.activeQuestion - 1
        }
      } else {
        return {...state}
      }
    }

    case quizActionTypes.CHOOSE_QUESTION: {
        return {
          ...state,
          activeQuestion: action.payload
        }
    }

    default:
      return state
  }
};

export const getAllQuizzes = state => state.allQuizzes;

export const getSelectedQuiz = state => state.selectedQuiz;
export const getQuizTitle = state => state.selectedQuiz.quizTitle;
export const getSelectedQuizQuestions = state => state.selectedQuiz.questions;

export const getActiveQuestion = state => state.activeQuestion;
export const getAnswerLabels = state => state.answerLabels;
export const getQuizIsDone = state => state.quizIsDone;



