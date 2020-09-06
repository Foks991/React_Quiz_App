import React from "react";
import {connect} from "react-redux";
import {useHistory} from 'react-router-dom';
import {getAllQuizzes} from "../../../store/rootReducer";
import {quizActions} from "../../../store/actions/quizActions";
import {camelToKebab} from "../../../helpers/textFormatter";
import {setQuizToStorage} from "../../../sessionStorage/quiz";
import {images} from "../../../helpers/imagesTransducer";

const QuizList = ({allQuizzes, setSelectedTest}) => {
  const history = useHistory();

  return (
    <div className={'quizList-wrap'}>
      <img className={'main-quiz-img'} src={`${images.quiz}`} alt=""/>
      <h1>Choose your test</h1>
      <div className={'quizList'}>
        {Object.keys(allQuizzes).map(item => {
            return <div
              className={'quiz'}
              key={allQuizzes[item].id}>
              <div
                className={'overlay'}
                id={allQuizzes[item].id}
                onClick={(e) => {
                  const quizId = e.target.id;
                  setSelectedTest(allQuizzes[quizId]);
                  setQuizToStorage(quizId);
                  history.push({pathname: `/${camelToKebab(quizId)}`});
                }}
              >
              </div>
              <div className={'quiz-content'}>
                <img src={images[allQuizzes[item].img]} alt={allQuizzes[item].img}/>
                <p className={'quiz-title'}>{allQuizzes[item].quizTitle}</p>
              </div>
            </div>
          }
        )}
      </div>
    </div>)
};


const mapStateToProps = (state) => ({
  allQuizzes: getAllQuizzes(state),
});

const mapDispatchToProps = {
  setSelectedTest: (id) => quizActions.setSelectedTest(id)
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizList)
