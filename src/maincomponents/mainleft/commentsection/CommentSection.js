import React, { Component } from "react";
import MyCommentSection from "./MyCommentSection";
import myCommentsData from "./myCommentsData";
import WriteComment from "./WriteComment";
import PostCommentButton from "./PostCommentButton";

export class CommentSection extends Component {
  constructor() {
    super();
    this.state = {
      myId: "food_23",
      myComment: "",
      myCommentList: myCommentsData
    };
  }
  handleOnChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleOnClick = () => {
    const { myComment, myCommentList, myId } = this.state;

    if (myComment.length > 0) {
      this.setState({
        myCommentList: myCommentList.concat({
          id: myCommentList.length + 1,
          userId: myId,
          comment: myComment
        }),
        myComment: ""
      });
    }
  };

  render() {
    const { myCommentList, myComment } = this.state;
    const { handleOnChange, handleOnClick } = this;
    return (
      <div className="commentSection">
        <div className="likesCount">100 Likes</div>
        <div className="descriptionSection">
          <span className="userId">food_23</span>
          <span className="description">Burger Party!!! </span>
        </div>
        <MyCommentSection writeNewComment={myCommentList} />
        <div className="writeComment">
          <WriteComment myComment={myComment} onChange={handleOnChange} />
          <PostCommentButton onClick={handleOnClick} />
        </div>
      </div>
    );
  }
}

export default CommentSection;
