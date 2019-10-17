import React, { Component } from "react";
import MainFeed from "./MainFeed.js";

export class MainLeft extends Component {
  render() {
    return (
      <div className="mainLeft">
        <MainFeed />
      </div>
    );
  }
}

export default MainLeft;
