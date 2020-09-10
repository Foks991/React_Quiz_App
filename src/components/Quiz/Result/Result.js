import React from 'react'
import { connect } from "react-redux";
import {
  getQuizIsDone,
  getSelectedQuizQuestions,
  getQuizId
} from "../../../store/rootReducer";
import { createHtmlLayout } from "./htmlResultLayout";

import downloadTxt from 'download-as-file'
import { camelToKebab } from "../../../helpers/textFormatter";

const Result = ({ selectedQuizQuestions, quizIsDone, quizId }) => {

  const downloadResultInTxt = () => {
    const formattedText = selectedQuizQuestions.map((el, index) =>{
      const correctAnswerIndex = el.correctAnswers[0];
      const correctAnswer = el.answers[correctAnswerIndex - 1].text;
      return `\nQuestion ${index + 1}: ${el.question} \nAnswer   ${index + 1}: ${correctAnswer} \n`
    });

    downloadTxt({data: formattedText.join(' '), filename: `${camelToKebab(quizId)}-result.txt`})
  };

  const downloadResultInHtml = () => downloadTxt({data: createHtmlLayout(selectedQuizQuestions), filename: `1.html`});

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
          <button className={'button-item btn-1'} style={{backgroundColor: '#20c00a'}} onClick={downloadResultInTxt}>Download results in txt</button>
          <button className={'button-item btn-1'} style={{marginTop: '20px', backgroundColor: '#20c00a'}} onClick={downloadResultInHtml}>Download results in html</button>
        </div>
        : null}
    </>
  )
};

const mapStateToProps = (state) => ({
  quizId: getQuizId(state),
  quizIsDone: getQuizIsDone(state),
  selectedQuizQuestions: getSelectedQuizQuestions(state),
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
