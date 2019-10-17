import React, { Component } from "react";

export class PostCommentButton extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <button className="post" onClick={onClick}>
        Post
      </button>
    );
  }
}

export default PostCommentButton;
