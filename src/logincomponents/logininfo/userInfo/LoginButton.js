import React from "react";
import { withRouter } from "react-router-dom";

class LoginButton extends React.Component {
  goToMainPage = () => {
    fetch("http://10.58.5.82:8000/login/signin", {
      method: "POST",
      body: JSON.stringify({
        email: this.props.userInputValue,
        password: this.props.passwordInputValue
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response.JsonWebToken) {
          localStorage.setItem("first-token", response.JsonWebToken);
          this.props.history.push("/mainpage");
        }
      });

    // event.preventDefault();
    // const { userInputValue, passwordInputValue, history } = this.props;
    // if (userInputValue === "food_23" && passwordInputValue === "password") {
    //   history.push("/mainpage");
  };

  render() {
    const { goToMainPage } = this;
    const { opacity } = this.props;
    return (
      <div className="loginButtonDiv">
        <button
          onClick={goToMainPage}
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
