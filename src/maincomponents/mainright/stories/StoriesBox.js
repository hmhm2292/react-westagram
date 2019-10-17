import React, { Component } from "react";
import storiesBoxData from "./storiesBoxData";
import GenerateStories from "./GenerateStories";
import StoriesAndWatch from "./StoriesAndWatch";

export class StoriesBox extends Component {
  constructor() {
    super();
    this.state = {
      myStories: storiesBoxData
    };
  }
  render() {
    const { myStories } = this.state;

    const myStoriesList = myStories.map(stories => (
      <GenerateStories key={stories.id} stories={stories} />
    ));
    return (
      <div className="storiesBox">
        <StoriesAndWatch />
        {myStoriesList}
      </div>
    );
  }
}
export default StoriesBox;
