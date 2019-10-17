import React, { Component } from "react";
import allmyfollowersdata from "./allmyfollowersdata";
import GenerateFollowers from "./GenerateFollowers";

export class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      myFollowersList: allmyfollowersdata,
      displayFollowers: "none",
      searchValue: "",
      keyWordsColor: "#2AA1CD",
      keyWordsIncluded: []
    };
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value
      },
      () => {
        const { searchValue, myFollowersList } = this.state;
        const filteredArray = [];
        myFollowersList.forEach(followers => {
          if (followers.toLowerCase().startsWith(searchValue.toLowerCase())) {
            filteredArray.push(followers);
          }
        });
        this.setState({
          keyWordsIncluded: filteredArray
        });
        if (searchValue.length > 0) {
          this.setState({ displayFollowers: "block" });
        } else {
          this.setState({ displayFollowers: "none" });
        }
      }
    );
  };

  render() {
    const {
      searchValue,
      keyWordsColor,
      keyWordsIncluded,
      displayFollowers
    } = this.state;
    const { handleOnChange } = this;
    const searchedFollowers = keyWordsIncluded.map((followers, i) => (
      <GenerateFollowers
        key={i}
        keyWordHighLighted={followers.slice(0, searchValue.length)}
        keyWordNotHighLighted={followers.slice(searchValue.length)}
        keyWordsColor={keyWordsColor}
      />
    ));
    return (
      <div className="navSearchBar">
        <input
          name="searchValue"
          value={searchValue}
          className="searchBar"
          type="text"
          placeholder="Search"
          onChange={handleOnChange}
        />
        <ul style={{ display: displayFollowers }} className="allMyFollowers">
          {searchedFollowers}
        </ul>
      </div>
    );
  }
}

export default SearchBar;
