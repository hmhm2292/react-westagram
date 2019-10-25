import React from "react";
import InputPassUser from "./InputPassUser.js";
import LoginButton from "./LoginButton.js";

class UserInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      userInputValue: "",
      passwordInputValue: "",
      buttonOpacity: 0.3,
      displayWarning: ""
    };
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value
      },
      () => {
        const { userInputValue, passwordInputValue } = this.state;
        if (userInputValue.length > 0 && passwordInputValue.length > 0) {
          this.setState(() => {
            return { buttonOpacity: 1, displayWarning: "none" };
          });
        }
        if (userInputValue.length === 0 || passwordInputValue.length === 0) {
          this.setState(() => {
            return { buttonOpacity: 0.3, displayWarning: "none" };
          });
        }
        if (userInputValue.length === 0) {
          this.setState(() => {
            return { displayWarning: "block" };
          });
        }
      }
    );
  };

  render() {
    const {
      userInputValue,
      passwordInputValue,
      buttonOpacity,
      displayWarning
    } = this.state;
    const { handleOnChange } = this;
    return (
      <div className="userInfo">
        <InputPassUser
          name="userInputValue"
          value={userInputValue}
          handleOnChange={handleOnChange}
          classValue="username"
          inputClass="username2"
          type="text"
          placeholder="Phone Number, username, or email"
        />
        <div style={{ display: displayWarning }} className="showWarning">
          Please Write Your Username
        </div>
        <InputPassUser
          name="passwordInputValue"
          value={passwordInputValue}
          handleOnChange={handleOnChange}
          classValue="password"
          inputClass="password2"
          type="password"
          placeholder="Password"
        />
        <LoginButton
          userInputValue={userInputValue}
          passwordInputValue={passwordInputValue}
          opacity={buttonOpacity}
        />
      </div>
    );
  }
}

export default UserInfo;
