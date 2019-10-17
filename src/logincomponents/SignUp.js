import React from "react";

class SignUp extends React.Component {
  render() {
    return (
      <div className="signup">
        <span className="noAccountText">Do not have an account?</span>
        <a
          className="signUpText"
          href="https://www.instagram.com/accounts/emailsignup/"
        >
          Sign up
        </a>
      </div>
    );
  }
}

export default SignUp;
