import React from "react";
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom';
import { getAllQuizzes } from "../../../store/rootReducer";
import { quizActions } from "../../../store/actions/quizActions";

const Quizzes = ({allQuizzes, setSelectedTest}) => {
  const history = useHistory();

  return (<div className={'quizList'}>
    {Object.keys(allQuizzes).map(item => {
      return <div
        className={'quiz'}
        key={allQuizzes[item].id}
        id={allQuizzes[item].id}
        onClick={(e) => {
          const el = e.target;
          const quizId = el.id;
          setSelectedTest(allQuizzes[quizId]);
          history.push({pathname: '/quiz'});
        }}
        >
          {allQuizzes[item].quizTitle}
        </div>
      }
    )}
  </div>)
};


const mapStateToProps = (state) => ({
  allQuizzes: getAllQuizzes(state),
});

const mapDispatchToProps = {
  setSelectedTest: (id) => quizActions.setSelectedTest(id)
};

export default connect(mapStateToProps, mapDispatchToProps)(Quizzes)