import React, {useEffect} from 'react'
import { connect } from "react-redux";
import QuizList from "./QuizList/QuizList";
import Header from "./Header/Header";
import Description from "./Description/Description";
import { quizActions } from "../../store/actions/quizActions";

const Main = ({ getUsers }) =>{

  useEffect(() => {
    getUsers();
  },[]);

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
  getUsers: () => quizActions.getUsers()
};

export default connect(mapStateToProps, mapDispatchToProps)(Main)

