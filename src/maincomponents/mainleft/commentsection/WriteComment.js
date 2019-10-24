import React, { Component } from "react";

export class WriteComment extends Component {
  render() {
    const { myComment, onChange } = this.props;
    return (
      <>
        <div className="typeYourComment">
          <input
            value={myComment}
            className="enterComment"
            name="myComment"
            placeholder="Add a comment..."
            onChange={onChange}
          />
        </div>
      </>
    );
  }
}

export default WriteComment;
