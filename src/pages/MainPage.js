import React, { Component } from "react";
import Navbar from "../maincomponents/navbar/Navbar";
import Main from "../maincomponents/Main";
import "../MainPage.css";

export class MainPage extends Component {
  render() {
    return (
      <div className="MainPage">
        <Navbar />
        <Main />
      </div>
    );
  }
}

export default MainPage;
