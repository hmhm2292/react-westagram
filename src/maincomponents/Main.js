import React, { Component } from "react";
import MainLeft from "./mainleft/MainLeft";
import MainRight from "./mainright/MainRight";

export class Main extends Component {
  render() {
    return (
      <main className="main">
        <MainLeft />
        <MainRight />
      </main>
    );
  }
}

export default Main;
