import React, { Component } from "react";
import MainFeedTop from "./MainFeedTop";
import MainFeedImg from "./MainFeedImg";
import ToolBar from "./ToolBar";
import CommentSection from "./commentsection/CommentSection";

export class MainFeed extends Component {
  render() {
    return (
      <article className="mainFeed">
        <MainFeedTop />
        <MainFeedImg />
        <ToolBar />
        <CommentSection />
      </article>
    );
  }
}

export default MainFeed;
