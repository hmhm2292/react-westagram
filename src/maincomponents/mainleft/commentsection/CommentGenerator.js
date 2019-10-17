import React, { Component } from "react";

export class CommentGenerator extends Component {
  render() {
    const { userId, comment } = this.props.comment;
    return (
      <li className="commentGenerator">
        <span className="userId">{userId}</span>
        <span className="comment">{comment}</span>
      </li>
    );
  }
}

export default CommentGenerator;
