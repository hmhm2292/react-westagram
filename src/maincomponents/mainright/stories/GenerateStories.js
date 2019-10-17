import React, { Component } from "react";

export class GenerateStories extends Component {
  render() {
    const { userPic, alt, userId } = this.props.stories;
    return (
      <div className="storiesList">
        <button className="iconButton">
          <img className="userIcon" src={userPic} alt={alt} />
        </button>
        <div className="userId">{userId}</div>
      </div>
    );
  }
}

export default GenerateStories;
