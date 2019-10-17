import React, { Component } from "react";

export class GenerateSuggestions extends Component {
  render() {
    const { userPic, alt, userId } = this.props.suggestions;
    return (
      <div className="suggestionsList">
        <button className="iconButton">
          <img className="userIcon" src={userPic} alt={alt} />
        </button>
        <div className="userId">{userId}</div>
        <button className="follow">Follow</button>
      </div>
    );
  }
}

export default GenerateSuggestions;
