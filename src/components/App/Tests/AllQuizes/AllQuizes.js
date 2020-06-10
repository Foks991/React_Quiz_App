import React from 'react'
import {connect} from 'react-redux'

const AllQuizzes = ({tests}) =>{
    console.log(tests);
    return(
        <p>asd</p>
        /*tests.map((item, index) => {
           return (<p key={index}>{item[index]}</p>)
        })*/
    )
};



const mapStateToProps = (state) => {
    return {
        tests: state.quiz,
    }
};


export default connect(mapStateToProps, null)(AllQuizzes)