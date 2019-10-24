import React from "react";
import Navbar from "../maincomponents/navbar/Navbar";
import Main from "../maincomponents/Main";
import "../styles/_MainPage.scss";
import "../styles/reset.scss";

function MainPage() {
  return (
    <div className="MainPage">
      <Navbar />
      <Main />
    </div>
  );
}

export default MainPage;
