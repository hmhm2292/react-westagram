import React, { Component } from "react";

export class GenerateFollowers extends Component {
  render() {
    const {
      keyWordsColor,
      keyWordHighLighted,
      keyWordNotHighLighted
    } = this.props;
    return (
      <li className="followers">
        <span style={{ color: keyWordsColor }}>{keyWordHighLighted}</span>
        {keyWordNotHighLighted}
      </li>
    );
  }
}

export default GenerateFollowers;
