import React, {useState} from "react";

import {GoogleLogin} from 'react-google-login';
import {useGoogleLogin} from 'react-google-login'
import {useGoogleLogout} from 'react-google-login'

import {connect} from "react-redux";

import {userAction} from "../../../store/actions/userActions";

const GoogleAuth = ({onSuccess, user,name, surname, email, isLogin, setUser}) => {

    const responseGoogle = (response) => {
        console.log('--------------');
        console.log(user);
        console.log('--------------');
        setUser({
            name: response.profileObj.givenName,
            surname: response.profileObj.familyName,
            email: response.profileObj.email,
            isLogin: response.profileObj.googleId,
        });
    };

    return (
        <div className={'googleAuth'}>
            <GoogleLogin
                //clientId="996107266209-et7i2pjho76nk7c9u18aiqmq85io1cq5.apps.googleusercontent.com"       //host
                clientId="996107266209-n6iv1b4as0jedtu1fqgrr93ca289onr2.apps.googleusercontent.com"     //localhost
                buttonText="Google Authorization"
                onSuccess={onSuccess}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
        name: state.user.user.name,
        surname: state.user.user.surname,
        email: state.user.user.email,
        isLogin: state.user.user.isLogin,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSuccess: (data) => dispatch(userAction.googleAuthSuccess(data)),
        setUser: (user) => dispatch({type: 'SET_USER', payload: user}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth)