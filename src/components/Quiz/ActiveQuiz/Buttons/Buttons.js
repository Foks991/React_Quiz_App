import React from 'react';
import { connect } from "react-redux";
import { quizActions } from "../../../../store/actions/quizActions";
import { getSelectedQuizQuestions } from "../../../../store/rootReducer";
import { StyledButton } from "../../../StyledComponents/CustomButton/CutstomButton";

export const Buttons = ({setQuizIsDone, setAllAnswers, nextQuestion, previousQuestion,selectedQuizQuestions }) => {

  const checkAllAnswers = (questions) => {
    const unAnsweredArr = questions.filter(item => item.selectedAnswer === null);
    return unAnsweredArr.length
  };

  return (<div className={'buttons-block'}>
    {!checkAllAnswers(selectedQuizQuestions) ?
      <StyledButton lightgreen onClick={() => setQuizIsDone(true)}>
        Закончить тест
      </StyledButton>
      :
      <>
        <StyledButton onClick={previousQuestion}>Назад</StyledButton>
        <StyledButton onClick={nextQuestion}>Вперёд</StyledButton>
      </>}
    <StyledButton onClick={setAllAnswers}>Fast Finish</StyledButton>
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






