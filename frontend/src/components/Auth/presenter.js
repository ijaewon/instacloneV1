
import React from "react";
import "./styles.scss";
import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';

const Auth = (props, context) => (
  <main className="auth">
    <div className="column">
      <img className="phone-img" src={require("images/phone.png")} alt="Checkout our app. Is cool" />
    </div>
    <div className="column">
        <div className="white-box">
            {props.action === 'login' && <LoginForm/>}
            {props.action === 'signup' && <SignupForm/>}
        </div>
      <div className="white-box">
        {props.action === 'login' && (
            <p>
            Don't have an account?{" "}
            <span
              className="change-link"
              onClick={props.changeAction}
            >
              Sign up
            </span>
          </p>
        )}
        {props.action === 'signup' && (
            <p>
            Have an account?{" "}
            <span
              className="change-link"
              onClick={props.changeAction}
            >
              Log in
            </span>
          </p>
        )}
      </div>
      <div className="app-box">
        <span>Get the app</span>
        <div className="appstores">
          <img
            src={require("images/ios.png")}
            alt="Download it on the Apple Appstore"
          />
          <img
            src={require("images/android.png")}
            alt="Download it on the Apple Appstore"
          />
        </div>
      </div>
    </div>
  </main>
);
export default Auth;