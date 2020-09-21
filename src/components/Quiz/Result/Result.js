import React from 'react'
import { connect } from "react-redux";
import { StyledButton } from "../../StyledComponents/CustomButton/CutstomButton";
import downloadTxt from 'download-as-file'
import { camelToKebab } from "../../../helpers/textFormatter";
import { createHtmlLayout } from "./layouts/htmlResultLayout";
import { createTxtLayout } from "./layouts/txtResultLayout";
import { getQuizIsDone, getSelectedQuizQuestions, getQuizId }  from "../../../store/rootReducer";

const Result = ({ selectedQuizQuestions, quizIsDone, quizId }) => {

  const downloadResultInTxt = () => downloadTxt({data: createTxtLayout(selectedQuizQuestions), filename: `${camelToKebab(quizId)}-result.txt`});
  const downloadResultInHtml = () => downloadTxt({data: createHtmlLayout(selectedQuizQuestions), filename: `${camelToKebab(quizId)}-result.html`});

  const answers = selectedQuizQuestions.map(item => item.correctAnswers.find(element => element === item.selectedAnswer));

  const questionsCount = answers.length;
  const correctAnswersCount = answers.filter(item => item);
  const percent = (correctAnswersCount.length * 100) / questionsCount;

  return (
    <>
      { quizIsDone &&
      <div className={'result-modal'}>
        <h2>Result</h2>
        <p className={'result-modal_percent'}>{Math.round(percent)}%</p>
        <p className={'result-modal_correct-answers'}>Correct
          answers: {correctAnswersCount.length} / {questionsCount}</p>
        <StyledButton onClick={downloadResultInTxt}>Download in txt</StyledButton>
        <StyledButton lightgreen onClick={downloadResultInHtml}>Download in html</StyledButton>
      </div> }
    </>
  )
};

const mapStateToProps = (state) => ({
  quizId: getQuizId(state),
  quizIsDone: getQuizIsDone(state),
  selectedQuizQuestions: getSelectedQuizQuestions(state),
});

export default connect(mapStateToProps, null)(Result);
