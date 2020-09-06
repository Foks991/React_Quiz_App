import React from 'react'
import { connect } from "react-redux";
import {
  getQuizIsDone,
  getSelectedQuizQuestions
} from "../../../store/rootReducer";

import downloadTxt from 'download-as-file'


const Result = ({selectedQuizQuestions, quizIsDone}) => {

  const a = selectedQuizQuestions.map((el, index) =>{
    const correctAnswerIndex = el.correctAnswers[0];
    const correctAnswer = el.answers[correctAnswerIndex - 1].text;
    return `\n Question ${index + 1}: ${el.question} \n Answer: ${index + 1} ${correctAnswer} \n`
  });

  const answers = [];
  selectedQuizQuestions.map(item => {
    answers.push(item.correctAnswers.find(element => element === item.selectedAnswer));
  });
  const summaryQuestionCount = answers.length;
  const correctAnswersCount = answers.filter(item => item !== undefined);
  const percent = (correctAnswersCount.length * 100) / summaryQuestionCount;

  return (
    <>
      {quizIsDone ?
        <div className={'result-modal'}>
          <h2>Result</h2>
          <p>{Math.round(percent)}%</p>
          <p>Correct answers: {correctAnswersCount.length} / {summaryQuestionCount}</p>
          <button onClick={() => downloadTxt({
            data: a.join(' '),
            filename: 'demo.txt'
          })}>download correct answers</button>
        </div>
        : null}
    </>
  )
};

const mapStateToProps = (state) => ({
  quizIsDone: getQuizIsDone(state),
  selectedQuizQuestions: getSelectedQuizQuestions(state),
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
