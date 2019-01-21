import React from "react";
import Ionicon from "react-ionicons";
import propTypes from 'prop-types';
import '../shared/formStyles.scss';


const SignupForm = props => (
    <div className="form-component">
      <h3 className="signup-header">
        Sign up to see photos and videos from your friends.
      </h3>
      <button className="button">
        <Ionicon icon="logo-facebook" fontSize="20px" color="white" /> Log in with
        Facebook
      </button>
      <span className="divider">or</span>
      <form className="form" onSubmit={props.handleSubmit} >
        <input 
          type="email" 
          placeholder="Email" 
          className="text-input"
          value={props.emailValue}
          onChange={props.handleInputChange}
          name="email"
        />
        <input 
          type="text" 
          placeholder="Full Name" 
          className="text-input" 
          value={props.fullNameValue}
          onChange={props.handleInputChange}
          name="fullName"
        />
        <input
          type="username"
          placeholder="Username"
          className="text-input"
          value={props.usernameValue}
          onChange={props.handleInputChange}
          name="username"
        />
        <input
          type="password"
          placeholder="Password"
          className="text-input"
          value={props.passwordValue}
          onChange={props.handleInputChange}
          name="password"
        />
        <input type="submit" value="Sign up" className="button" onChange={props.handleInputChange}/>
      </form>
      <p className="terms">
        By signing up, you agree to our <span>Terms & Privacy Policy</span>.
      </p>
    </div>
  );

  SignupForm.propTypes = {
    emailValue: propTypes.string.isRequired,
    fullNameValue: propTypes.string.isRequired,
    usernameValue: propTypes.string.isRequired,
    passwordValue: propTypes.string.isRequired,
    handleInputChange: propTypes.func.isRequired,
    handleSubmit: propTypes.func.isRequired,
  }

export default SignupForm;