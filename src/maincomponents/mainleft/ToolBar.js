import React from "react";

function ToolBar() {
  return (
    <div className="toolBar">
      <div className="tools">
        <button className="likeButton"></button>
        <button className="commentButton"></button>
        <button className="shareButton"></button>
      </div>

      <button className="bookmarkButton"></button>
    </div>
  );
}

export default ToolBar;
