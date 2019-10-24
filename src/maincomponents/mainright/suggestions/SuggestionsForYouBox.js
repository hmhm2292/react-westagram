import React, { Component } from "react";
import suggestionsBoxData from "./suggestionsBoxData";
import GenerateStories from "../suggestions/GenerateSuggestions";
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
    const mySuggestionsList = mySuggestions.map(suggestions => (
      <GenerateStories key={suggestions.id} suggestions={suggestions} />
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
