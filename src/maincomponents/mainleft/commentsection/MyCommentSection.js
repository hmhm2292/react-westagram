import React, { Component } from "react";
import CommentGenerator from "./CommentGenerator";

export class MyCommentSection extends Component {
  render() {
    const myCommentList = this.props.writeNewComment.map(comment => (
      <CommentGenerator key={comment.id} comment={comment} />
    ));
    return (
      <div className="myCommentSection">
        <ul className="commentList">{myCommentList}</ul>
      </div>
    );
  }
}

export default MyCommentSection;
