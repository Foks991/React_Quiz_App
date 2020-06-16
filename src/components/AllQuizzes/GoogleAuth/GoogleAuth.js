import React, {useState} from "react";

import {GoogleLogin} from 'react-google-login';
import {useGoogleLogin} from 'react-google-login'
import {useGoogleLogout} from 'react-google-login'

import {connect} from "react-redux";
import {fetchTests} from "../../../store/actions/actions";

const mapStateToProps = (state) => {
    return {
        name: state.userReducer.user.name,
        surname: state.userReducer.user.surname,
        email: state.userReducer.user.email,
        //isLogin: state.userReducer.user.isLogin,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setUser: (user) => dispatch({type: 'SET_USER', payload : user}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(({name, surname, email, isLogin, setUser}) => {

    const responseGoogle = (response) => {
        console.log(response);
        setUser({
            name: response.profileObj.givenName,
            surname: response.profileObj.familyName,
            email: response.profileObj.email,
            //isLogin: response.profileObj.googleId,
        });
    };

    console.log(name);
    console.log(surname);
    console.log(email);
    //console.log(isLogin);

    return (
        <div className={'googleAuth'}>
            <GoogleLogin
                clientId="996107266209-et7i2pjho76nk7c9u18aiqmq85io1cq5.apps.googleusercontent.com"       //host
                //clientId="996107266209-9uqcve806ecjqnfbiukmtdqr4n7935hi.apps.googleusercontent.com"     //localhost
                buttonText="Google Authorization"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
});