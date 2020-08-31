import React from 'react';
import { connect} from "react-redux";
import { quizActions} from "../../../../store/actions/quizActions";
import {
  getActiveQuestion,
  getSelectedQuizQuestions
} from "../../../../store/rootReducer";

export const NavList = ({selectedQuizQuestions, activeQuestion, chooseQuestion}) => {

  return (
    <ul className={'nav-list'}>
      {selectedQuizQuestions.map((item, index) =>
        (<li key={index}>
            <span
              className={activeQuestion === index ? 'nav-list-active' : 'nav-list-inactive'}
              onClick={e => {chooseQuestion(Number(e.target.innerText) - 1)}}
            >
              {item.id + 1}
            </span>
            <span className={'question-status'}
                  style={item.selectedAnswer === null ? {'backgroundColor': 'red'} : {'backgroundColor': 'lime'}}
            >
            </span>
          </li>)
      )}
    </ul>
  )
};

const mapStateToProps = (state) => ({
  activeQuestion: getActiveQuestion(state),
  selectedQuizQuestions: getSelectedQuizQuestions(state),
});

const mapDispatchToProps = {
  chooseQuestion: (number) => quizActions.chooseQuestion(number)
};

export default connect(mapStateToProps, mapDispatchToProps)(NavList);