import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './login_form';
import SignupForm from './signup_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  loggedIn: !!(state.session.currentUser),
  errors: state.errors.session
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = (ownProps.match.path.match(/.+login/)) ? "login" : "signup"
  const action = (formType == "login") ? login : signup
  return {
    processForm: (user) => dispatch(action(user)),
    formType
  };
};

export const LoginFormContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm));

export const SignupFormContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm));
