import React, { Component } from "react";

export class WriteComment extends Component {
  render() {
    const { myComment, onChange } = this.props;
    return (
      <>
        <div className="typeYourComment">
          <textarea
            value={myComment}
            className="enterComment"
            name="myComment"
            placeholder="Add a comment..."
            onChange={onChange}
          ></textarea>
        </div>
      </>
    );
  }
}

export default WriteComment;
