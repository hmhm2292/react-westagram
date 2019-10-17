import React from "react";
import Logo from "./Logo.js";
import UserInfo from "./userInfo/UserInfo.js";
import FacebookLogin from "./FacebookLogin.js";

class LoginInfo extends React.Component {
  render() {
    return (
      <div className="loginInfo">
        <Logo />
        <UserInfo />
        <div className="orSegment">
          <div className="line1"></div>
          <div className="or">or</div>
          <div className="line2"></div>
        </div>
        <FacebookLogin />
        <a
          className="forgotPassword"
          href="https://www.instagram.com/accounts/password/reset/"
        >
          Forgot Password?
        </a>
      </div>
    );
  }
}

export default LoginInfo;
