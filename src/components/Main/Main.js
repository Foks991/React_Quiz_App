import React, {useEffect} from 'react'
import { connect } from "react-redux";
import QuizList from "./QuizList/QuizList";
import Header from "./Header/Header";
import Description from "./Description/Description";
import { quizActions } from "../../store/actions/quizActions";


const Main = ({ getUsers }) =>{

/*  const ws = new WebSocket('ws://wsttestt.eu-4.evennode.com');
  const wsSend = data => !ws.readyState ? setTimeout(() => wsSend(data),100) : ws.send(data);
  wsSend('client data');*/

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

