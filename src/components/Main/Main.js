import React from 'react'
import { connect } from "react-redux";
import QuizList from "./QuizList/QuizList";
import Header from "./Header/Header";
import Description from "./Description/Description";

const Main = () =>{

  return(
  <>
    <Header/>
    <Description/>
    <QuizList/>
  </>
)} ;

const mapStateToProps = () => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Main)

