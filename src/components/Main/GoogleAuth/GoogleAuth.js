import React from "react";

import { GoogleLogin } from 'react-google-login';
import { connect } from "react-redux";
import { userAction } from "../../../store/actions/userActions";
import { getUser } from "../../../store/reducers/userReducer";
import { useGoogleLogout } from 'react-google-login'
import { useGoogleLogin } from 'react-google-login'

const GoogleAuth = ({onSuccess, user}) => {

  const responseGoogle = response => console.log(response);

  return (
    <div className={'googleAuth'}>
      <GoogleLogin
        clientId="996107266209-n6iv1b4as0jedtu1fqgrr93ca289onr2.apps.googleusercontent.com"
        buttonText="Google Authorization"
        onSuccess={onSuccess}
        /*onFailure={responseGoogle}*/
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    user: getUser(state),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSuccess: (data) => dispatch(userAction.googleAuthSuccess(data)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth)