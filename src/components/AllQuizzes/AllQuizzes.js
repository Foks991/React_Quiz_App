import React, {useState} from 'react'
import {connect} from 'react-redux'
import {fetchTests} from '../../store/actions/actions'

import GoogleLogin from 'react-google-login';


const AllQuizzes = ({state, quiz, test, fromServer, onfetch, onBla}) => {
    {console.log(state)}
    {console.log(quiz)}
    {console.log(test)}
    {console.log(fromServer)}

    const responseGoogle = (response) => {
        console.log(response);
        /*setName(response.profileObj.name);
        setEmail(response.profileObj.email); */
    };

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div className={'allQuizzes'}>
            <div style={{position: 'fixed', top: 0}}>
                <button
                    style={{width: 146, height: 40, backgroundColor: "lime", cursor: 'pointer', marginRight: 20}}
                    onClick={onfetch}
                >Fetch
                </button>
                <GoogleLogin
                    clientId="996107266209-c29o81pvdbllpth51au16hitku6cts3p.apps.googleusercontent.com"
                    /*render={renderProps => (
                        <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
                    )}*/
                    buttonText="Google Authorization"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
            {/*{Object.keys(quiz).map(item =>
                <div
                    className={'quizz'}
                    key={quiz[item].id}
                    onClick={(e) =>{
                        console.log(e);
                        //window.location ='http://localhost:3000/quiz'
                    }}
                >{quiz[item].id}
                </div>
            )}*/}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        state: state,
        quiz: state.quiz,
        test: state.testReducer,
        fromServer: state.quiz.fromServer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onfetch: () => dispatch(fetchTests()),
        onBla: () => dispatch({type:'BLA'}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AllQuizzes)