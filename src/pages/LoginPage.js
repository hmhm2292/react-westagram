import React from "react";
import "../styles/reset.scss";
import LoginInfo from "../logincomponents/logininfo/LoginInfo";
import SignUp from "../logincomponents/signup/SignUp";
import GetTheApp from "../logincomponents/gettheapp/GetTheApp";

function LoginPage() {
  return (
    <div className="login">
      <div className="loginComponents">
        <LoginInfo />
        <SignUp />
        <GetTheApp />
      </div>
    </div>
  );
}

export default LoginPage;
