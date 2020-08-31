import React from 'react';
import { connect } from "react-redux";
import { quizActions } from "../../../../store/actions/quizActions";
import { getSelectedQuizQuestions } from "../../../../store/rootReducer";

export const Buttons = ({setQuizIsDone, setAllAnswers, nextQuestion, previousQuestion,selectedQuizQuestions }) => {

  const checkAllAnswers = (questions) => {
    const unAnsweredArr = questions.filter(item => item.selectedAnswer === null);
    return unAnsweredArr.length
  };

  return (<div className={'buttons-block'}>
    {!checkAllAnswers(selectedQuizQuestions) ?
      <div
        style={{'backgroundColor': '#16BE00'}}
        className={"button-item btn-1"}
        onClick={() => setQuizIsDone(true)}>
        Закончить тест
      </div>
      :
      <>
        <div className={"button-item btn-1"} onClick={previousQuestion}>Назад</div>
        <div className={"button-item btn-1"} onClick={nextQuestion}>Вперёд</div>
      </>}
    <div className={"button-item btn-1"} onClick={setAllAnswers}>Fast Finish</div>
  </div>)

};
const mapStateToProps = (state) => ({
  selectedQuizQuestions: getSelectedQuizQuestions(state),
});

const mapDispatchToProps = {
  setQuizIsDone: (bool) => quizActions.setQuizIsDone(bool),
  setAllAnswers: () => quizActions.setAllAnswers(),
  nextQuestion: () => quizActions.nextQuestion(),
  previousQuestion: () => quizActions.previousQuestion(),
};

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);






