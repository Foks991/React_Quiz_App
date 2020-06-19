import React from "react";
import {connect} from "react-redux";

const setSelectedTestToStorage = (selectedTest) => sessionStorage.setItem('selectedTest', selectedTest);

const Quizzes = ({quiz}) => {

    return (
        <div className={'quizList'}>
            {Object.keys(quiz).map(item => {
                    if (item.endsWith('Quiz')) {
                        return <div
                            className={'quizz'}
                            key={quiz[item].id}
                            id={quiz[item].id}
                            onClick={(e) => {
                                let el = e.target;
                                setSelectedTestToStorage(el.id);
                                window.location = 'http://testtesst.hostenko.net/quiz'
                            }}
                        >{quiz[item].id}
                        </div>
                    }
                }
            )}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        quiz: state.quiz,
        selectedTest: state.user.selectedTest
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        //onfetch: () => dispatch(fetchTests()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Quizzes)