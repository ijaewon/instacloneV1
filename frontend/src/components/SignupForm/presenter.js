import React from "react";
import Ionicon from "react-ionicons";
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
      <form className="form">
        <input type="email" placeholder="Email" className="text-input" />
        <input type="text" placeholder="Full Name" className="text-input" />
        <input
          type="username"
          placeholder="Username"
          className="text-input"
        />
        <input
          type="password"
          placeholder="Password"
          className="text-input"
        />
        <input type="submit" value="Sign up" className="button" />
      </form>
      <p className="terms">
        By signing up, you agree to our <span>Terms & Privacy Policy</span>.
      </p>
    </div>
  );

export default SignupForm;