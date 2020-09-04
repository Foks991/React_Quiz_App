import React from 'react'
import { connect } from "react-redux";

import Quizzes from "./Quizzes/Quizzes";

const Main = () =>{

  return(
  <>
    <div className={'allQuizzes'}>
      <>
        <div className={'userGreetings'}>
          <p>Choose quiz for test your skills</p>
        </div>
        <Quizzes/>
      </>
    </div>
  </>
)} ;

const mapStateToProps = () => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Main)

