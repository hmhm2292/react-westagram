import React from "react";
import { withRouter } from "react-router-dom";

class LoginButton extends React.Component {
  goToMainPage() {
    const { userInputValue, passwordInputValue, history } = this.props;
    if (userInputValue === "food_23" && passwordInputValue === "password") {
      history.push("/mainpage");
    }
  }

  render() {
    const { goToMainPage } = this;
    const { opacity } = this.props;
    return (
      <div className="loginButtonDiv">
        <button
          onClick={goToMainPage.bind(this)}
          className="loginButton"
          style={{ opacity: opacity }}
        >
          <span className="loginButtonText">Log In</span>
        </button>
      </div>
    );
  }
}

export default withRouter(LoginButton);
