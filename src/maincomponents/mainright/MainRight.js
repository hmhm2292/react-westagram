import React, { Component } from "react";
import MainUserId from "./MainUserId";
import StoriesBox from "./stories/StoriesBox";
import SuggestionsForYouBox from "./suggestions/SuggestionsForYouBox";
import ReferenceBox from "./ReferenceBox";

export class MainRight extends Component {
  render() {
    return (
      <div className="mainRight">
        <MainUserId />
        <StoriesBox />
        <SuggestionsForYouBox />
        <ReferenceBox />
      </div>
    );
  }
}

export default MainRight;
