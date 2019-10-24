import React from "react";
import MainFeedTop from "./MainFeedTop";
import MainFeedImg from "./MainFeedImg";
import ToolBar from "./ToolBar";
import CommentSection from "./commentsection/CommentSection";
import "./_MainLeft.scss";

function MainLeft() {
  return (
    <div className="mainLeft">
      <article className="mainFeed">
        <MainFeedTop />
        <MainFeedImg />
        <ToolBar />
        <CommentSection />
      </article>
    </div>
  );
}

export default MainLeft;
