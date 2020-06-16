import React from "react";
import {connect} from "react-redux";
import {fetchTests} from "../../../store/actions/actions";

const mapStateToProps = (state) => {
    return {
        quiz: state.quiz,
        quizType: state.userReducer.quizType
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onfetch: () => dispatch(fetchTests()),
    }
};

const setQuizTypeToStorage = (quizType) =>{
    sessionStorage.setItem('quizType', quizType )
};

export default connect(mapStateToProps, mapDispatchToProps)(({quiz, quizType}) => {
    console.log("quiztype", quizType);
    return (
        <div>asd</div>
      /*  Object.keys(quiz).map(item =>
            <div
                className={'quizz'}
                key={quiz[item].id}
                id={quiz[item].id}
                onClick={(e) => {
                    let el = e.target;
                    console.log(el.id);
                    setQuizTypeToStorage(el.id);
                    window.location ='http://localhost:3000/quiz'
                }}
            >{quiz[item].id}
            </div>
        )*/)
});

