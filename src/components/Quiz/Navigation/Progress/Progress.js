import React from 'react'
import { connect } from "react-redux";
import { getSelectedQuizQuestions} from "../../../../store/rootReducer";

export const Progress = ({selectedQuizQuestions}) => {

  const quizPercentDone = () => {
    const answersCount = selectedQuizQuestions.length;
    const completedTestsCount = selectedQuizQuestions.filter(item => item.selectedAnswer !== null);
    const percentage = (completedTestsCount.length * 100) / answersCount;

    return (!Number.isInteger(percentage)) ? percentage.toFixed(1) : percentage;
  };

  return (
    <div className={'progress-block'}>
      <div className={'progress-status'}>
        <p>Progress:</p>
        <p>{quizPercentDone()}%</p>
      </div>
      <div className={'progress'}>
        <div className={'current'} style={{'width': quizPercentDone() + '%'}}> </div>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => ({
  selectedQuizQuestions: getSelectedQuizQuestions(state),
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Progress);
