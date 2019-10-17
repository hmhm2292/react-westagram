import React, { Component } from "react";
import suggestionsBoxData from "./suggestionsBoxData";
import GenerateStories from "../stories/GenerateStories";
import SuggestionsSeeAll from "./SuggestionsSeeAll";

export class SuggestionsForYouBox extends Component {
  constructor() {
    super();
    this.state = {
      mySuggestions: suggestionsBoxData
    };
  }
  render() {
    const { mySuggestions } = this.state;
    const mySuggestionsList = mySuggestions.map(stories => (
      <GenerateStories key={stories.id} stories={stories} />
    ));
    return (
      <div className="suggestionsForYouBox">
        <SuggestionsSeeAll />
        {mySuggestionsList}
      </div>
    );
  }
}

export default SuggestionsForYouBox;
