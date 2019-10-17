import React from "react";
import "../LoginPage.css";
import LoginInfo from "../logincomponents/LoginInfo";
import SignUp from "../logincomponents/SignUp";
import GetTheApp from "../logincomponents/GetTheApp";

function LoginPage() {
  return (
    <div className="loginPage">
      <LoginInfo />
      <SignUp />
      <GetTheApp />
    </div>
  );
}

export default LoginPage;
