import React from "react";
import MainUserId from "./MainUserId";
import StoriesBox from "./stories/StoriesBox";
import SuggestionsForYouBox from "./suggestions/SuggestionsForYouBox";
import ReferenceBox from "./ReferenceBox";
import "./_MainRight.scss";

function MainRight() {
  return (
    <div className="mainRight">
      <MainUserId />
      <StoriesBox />
      <SuggestionsForYouBox />
      <ReferenceBox />
    </div>
  );
}

export default MainRight;
