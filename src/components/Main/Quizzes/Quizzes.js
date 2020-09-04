import React from "react";
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom';
import { getAllQuizzes } from "../../../store/rootReducer";
import { quizActions } from "../../../store/actions/quizActions";
import { camelToKebab} from "../../../helpers/textFormatter";
import { setQuizToStorage } from "../../../sessionStorage/quiz";
import html from '../../../images/html.svg'
import css from '../../../images/css.svg'
import react from '../../../images/react.svg'

const imgs = { html, css, react };

const Quizzes = ({allQuizzes, setSelectedTest}) => {
  const history = useHistory();

  return (<div className={'quizList'}>
    {Object.keys(allQuizzes).map(item => {
      return <div
        className={'quiz'}
        key={allQuizzes[item].id}
        id={allQuizzes[item].id}
        onClick={(e) => {
          const quizId = e.target.id;
          const selectedQuiz = {...allQuizzes[quizId]};
          setSelectedTest(selectedQuiz);
          setQuizToStorage(quizId);
          history.push({pathname: `/${camelToKebab(quizId)}`});
        }}
        >
          {allQuizzes[item].quizTitle}
        <img src={ imgs[allQuizzes[item].img] } alt=""/>
        </div>
      })}
  </div>)
};


const mapStateToProps = (state) => ({
  allQuizzes: getAllQuizzes(state),
});

const mapDispatchToProps = {
  setSelectedTest: (id) => quizActions.setSelectedTest(id)
};

export default connect(mapStateToProps, mapDispatchToProps)(Quizzes)
